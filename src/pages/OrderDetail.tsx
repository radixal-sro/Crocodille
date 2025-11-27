import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { OrderService } from '../services';
import type { Order } from '../types';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Table, TableHeader, TableRow, TableHead, TableCell } from '../components/ui/Table';
import { ArrowLeft, Printer, CheckCircle, XCircle, Clock, MapPin } from 'lucide-react';

const OrderDetail = () => {
    const { orderId } = useParams<{ orderId: string }>();
    const navigate = useNavigate();
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadOrder = async () => {
            if (!orderId) return;
            setLoading(true);
            try {
                // Simulating fetch by ID - in a real app, we'd have a specific endpoint
                const allOrders = await OrderService.getAll();
                const foundOrder = allOrders.find(o => o.id === orderId);
                setOrder(foundOrder || null);
            } catch (error) {
                console.error('Failed to load order', error);
            } finally {
                setLoading(false);
            }
        };
        loadOrder();
    }, [orderId]);

    if (loading) {
        return <div className="p-8 text-center text-slate-500">Načítám detail objednávky...</div>;
    }

    if (!order) {
        return (
            <div className="p-8 text-center">
                <h2 className="text-xl font-bold text-slate-900">Objednávka nenalezena</h2>
                <Button variant="ghost" onClick={() => navigate('/orders')} className="mt-4">
                    Zpět na seznam
                </Button>
            </div>
        );
    }

    const getStatusVariant = (status: Order['status']) => {
        switch (status) {
            case 'NEW': return 'info';
            case 'APPROVED': return 'warning';
            case 'SHIPPED': return 'success';
            case 'DELIVERED': return 'neutral';
            default: return 'neutral';
        }
    };

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            {/* Header Actions */}
            <div className="flex items-center justify-between">
                <Button variant="ghost" icon={<ArrowLeft size={16} />} onClick={() => navigate('/orders')}>
                    Zpět
                </Button>
                <div className="flex gap-2">
                    <Button variant="secondary" icon={<Printer size={16} />}>Tisk</Button>
                    {order.status === 'NEW' && (
                        <>
                            <Button variant="danger" icon={<XCircle size={16} />}>Zamítnout</Button>
                            <Button variant="primary" icon={<CheckCircle size={16} />}>Schválit</Button>
                        </>
                    )}
                </div>
            </div>

            {/* Main Info Card */}
            <Card className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-slate-100">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl font-display font-bold text-slate-900">
                                Objednávka #{order.id}
                            </h1>
                            <Badge variant={getStatusVariant(order.status)} className="text-sm px-2.5 py-0.5">
                                {order.status}
                            </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-slate-500 text-sm">
                            <div className="flex items-center gap-1.5">
                                <Clock size={14} />
                                <span>Vytvořeno: {new Date(order.createdAt).toLocaleString('cs-CZ')}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <MapPin size={14} />
                                <span>Pobočka: <span className="font-medium text-slate-700">{order.branchName}</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                        <div className="text-sm text-slate-500 mb-1">Celková cena</div>
                        <div className="text-3xl font-bold text-croco-green">
                            {order.totalPrice.toLocaleString()} Kč
                        </div>
                    </div>
                </div>

                {/* Order Items */}
                <div className="mb-6">
                    <h3 className="font-bold text-slate-900 mb-4">Položky objednávky</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Produkt</TableHead>
                                <TableHead className="text-right">Množství</TableHead>
                                <TableHead className="text-right">Cena za kus</TableHead>
                                <TableHead className="text-right">Celkem</TableHead>
                            </TableRow>
                        </TableHeader>
                        <tbody>
                            {order.items.map((item, idx) => (
                                <TableRow key={idx}>
                                    <TableCell className="font-medium text-slate-900">{item.productName}</TableCell>
                                    <TableCell className="text-right">{item.quantity} ks</TableCell>
                                    <TableCell className="text-right">{item.price.toLocaleString()} Kč</TableCell>
                                    <TableCell className="text-right font-bold text-slate-900">
                                        {(item.quantity * item.price).toLocaleString()} Kč
                                    </TableCell>
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                </div>

                {/* Summary Footer */}
                <div className="flex justify-end border-t border-slate-100 pt-6">
                    <div className="w-64 space-y-2">
                        <div className="flex justify-between text-slate-600">
                            <span>Mezisoučet</span>
                            <span>{(order.totalPrice * 0.79).toLocaleString(undefined, { maximumFractionDigits: 0 })} Kč</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                            <span>DPH (21%)</span>
                            <span>{(order.totalPrice * 0.21).toLocaleString(undefined, { maximumFractionDigits: 0 })} Kč</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg text-slate-900 pt-2 border-t border-slate-100">
                            <span>Celkem k úhradě</span>
                            <span>{order.totalPrice.toLocaleString()} Kč</span>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default OrderDetail;
