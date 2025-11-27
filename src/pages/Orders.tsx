import { useState, useEffect } from 'react';
import { OrderService } from '../services';
import type { Order } from '../types';
import { Table, TableHeader, TableRow, TableHead, TableCell } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Eye, Loader2, ArrowUpDown, Filter } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [sortConfig, setSortConfig] = useState<{ key: keyof Order; direction: 'asc' | 'desc' } | null>(null);
    const [statusFilter, setStatusFilter] = useState<string>('ALL');
    const navigate = useNavigate();

    useEffect(() => {
        const loadOrders = async () => {
            setLoading(true);
            try {
                const data = await OrderService.getAll();
                setOrders(data);
            } catch (error) {
                console.error('Failed to load orders', error);
            } finally {
                setLoading(false);
            }
        };
        loadOrders();
    }, []);

    const handleSort = (key: keyof Order) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const filteredAndSortedOrders = orders
        .filter(order => statusFilter === 'ALL' || order.status === statusFilter)
        .sort((a, b) => {
            if (!sortConfig) return 0;
            const { key, direction } = sortConfig;

            if (a[key] < b[key]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });

    const getStatusVariant = (status: Order['status']) => {
        switch (status) {
            case 'NEW': return 'info';
            case 'APPROVED': return 'warning';
            case 'SHIPPED': return 'success';
            case 'DELIVERED': return 'neutral';
            default: return 'neutral';
        }
    };

    const getStatusLabel = (status: Order['status']) => {
        switch (status) {
            case 'NEW': return 'Nová';
            case 'APPROVED': return 'Schválená';
            case 'SHIPPED': return 'Odeslaná';
            case 'DELIVERED': return 'Doručená';
            default: return status;
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-display font-bold text-slate-900">Objednávky</h1>
                    <p className="text-slate-500">Přehled objednávek z poboček.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-croco-green/20 focus:border-croco-green appearance-none cursor-pointer"
                        >
                            <option value="ALL">Všechny stavy</option>
                            <option value="NEW">Nová</option>
                            <option value="APPROVED">Schválená</option>
                            <option value="SHIPPED">Odeslaná</option>
                            <option value="DELIVERED">Doručená</option>
                        </select>
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                </div>
            </div>

            <Card className="overflow-hidden">
                {loading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="animate-spin text-croco-green" size={32} />
                    </div>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="cursor-pointer hover:bg-slate-50" onClick={() => handleSort('id')}>
                                    <div className="flex items-center gap-1">
                                        ID Objednávky
                                        <ArrowUpDown size={14} className="text-slate-400" />
                                    </div>
                                </TableHead>
                                <TableHead>Pobočka</TableHead>
                                <TableHead className="cursor-pointer hover:bg-slate-50" onClick={() => handleSort('createdAt')}>
                                    <div className="flex items-center gap-1">
                                        Datum
                                        <ArrowUpDown size={14} className="text-slate-400" />
                                    </div>
                                </TableHead>
                                <TableHead>Položky</TableHead>
                                <TableHead className="cursor-pointer hover:bg-slate-50" onClick={() => handleSort('totalPrice')}>
                                    <div className="flex items-center gap-1">
                                        Cena celkem
                                        <ArrowUpDown size={14} className="text-slate-400" />
                                    </div>
                                </TableHead>
                                <TableHead className="cursor-pointer hover:bg-slate-50" onClick={() => handleSort('status')}>
                                    <div className="flex items-center gap-1">
                                        Stav
                                        <ArrowUpDown size={14} className="text-slate-400" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-right">Akce</TableHead>
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            {filteredAndSortedOrders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell className="font-medium text-slate-900">{order.id}</TableCell>
                                    <TableCell>{order.branchName}</TableCell>
                                    <TableCell>{new Date(order.createdAt).toLocaleString('cs-CZ')}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-1">
                                            {order.items.slice(0, 2).map((item, idx) => (
                                                <span key={idx} className="text-xs text-slate-600">
                                                    {item.quantity}x {item.productName}
                                                </span>
                                            ))}
                                            {order.items.length > 2 && (
                                                <span className="text-xs text-slate-400">
                                                    + {order.items.length - 2} další
                                                </span>
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell className="font-bold text-slate-900">
                                        {order.totalPrice.toLocaleString()} Kč
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={getStatusVariant(order.status)}>
                                            {getStatusLabel(order.status)}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            icon={<Eye size={16} />}
                                            onClick={() => navigate(`/orders/${order.id}`)}
                                        >
                                            Detail
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                )}
            </Card>
        </div>
    );
};

export default Orders;
