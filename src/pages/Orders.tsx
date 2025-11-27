import React, { useState, useEffect } from 'react';
import { OrderService } from '../services';
import type { Order } from '../types';
import { Table, TableHeader, TableRow, TableHead, TableCell } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Eye, Loader2 } from 'lucide-react';
import { Card } from '../components/ui/Card';

const Orders = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

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
                                <TableHead>ID Objednávky</TableHead>
                                <TableHead>Pobočka</TableHead>
                                <TableHead>Datum</TableHead>
                                <TableHead>Položky</TableHead>
                                <TableHead>Cena celkem</TableHead>
                                <TableHead>Stav</TableHead>
                                <TableHead className="text-right">Akce</TableHead>
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            {orders.map((order) => (
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
                                        <Button variant="ghost" size="sm" icon={<Eye size={16} />}>
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
