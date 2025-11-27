import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, AlertTriangle, Save, RefreshCw, Minus, Plus } from 'lucide-react';
import clsx from 'clsx';
import { MOCK_PRODUCTS, WASTE_REASONS } from '../../services/mockData';
import { Button } from '../ui/Button';

interface WasteItem {
    productId: string;
    quantity: number;
    reasonId: string;
    cost: number;
}

export const WasteManager = () => {
    const [wasteItems, setWasteItems] = useState<Record<string, WasteItem>>({});
    const [selectedReason, setSelectedReason] = useState<string>('exp');

    const handleQuantityChange = (productId: string, delta: number, cost: number) => {
        setWasteItems(prev => {
            const current = prev[productId] || { productId, quantity: 0, reasonId: selectedReason, cost };
            const newQuantity = Math.max(0, current.quantity + delta);

            if (newQuantity === 0) {
                const { [productId]: _, ...rest } = prev;
                return rest;
            }

            return {
                ...prev,
                [productId]: { ...current, quantity: newQuantity, reasonId: selectedReason }
            };
        });
    };

    const totalLoss = Object.values(wasteItems).reduce((sum, item) => sum + (item.quantity * item.cost), 0);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(100vh-12rem)]">
            {/* Left Panel: Product Grid */}
            <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Reason Selector */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex gap-4 overflow-x-auto">
                    {WASTE_REASONS.map(reason => (
                        <button
                            key={reason.id}
                            onClick={() => setSelectedReason(reason.id)}
                            className={clsx(
                                "flex-shrink-0 px-6 py-3 rounded-xl font-bold transition-all duration-200 border-2",
                                selectedReason === reason.id
                                    ? "border-slate-800 bg-slate-800 text-white shadow-lg scale-105"
                                    : "border-slate-100 bg-slate-50 text-slate-600 hover:bg-slate-100"
                            )}
                        >
                            {reason.label}
                        </button>
                    ))}
                </div>

                {/* Products */}
                <div className="flex-1 overflow-y-auto grid grid-cols-2 md:grid-cols-3 gap-4 pb-20">
                    {MOCK_PRODUCTS.filter(p => p.category !== 'INGREDIENT').map(product => {
                        const currentQty = wasteItems[product.id]?.quantity || 0;

                        return (
                            <motion.div
                                key={product.id}
                                layout
                                className={clsx(
                                    "bg-white rounded-2xl border-2 overflow-hidden relative transition-all duration-200",
                                    currentQty > 0 ? "border-red-500 shadow-md" : "border-slate-200 shadow-sm"
                                )}
                            >
                                <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />

                                <div className="p-4">
                                    <h3 className="font-bold text-slate-800 leading-tight mb-4 h-10">{product.name}</h3>

                                    <div className="flex items-center justify-between gap-2">
                                        <button
                                            onClick={() => handleQuantityChange(product.id, -1, product.cost)}
                                            className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 active:scale-95 transition-all"
                                        >
                                            <Minus className="w-6 h-6" />
                                        </button>

                                        <div className="flex-1 text-center">
                                            <span className={clsx(
                                                "text-2xl font-bold",
                                                currentQty > 0 ? "text-red-600" : "text-slate-300"
                                            )}>
                                                {currentQty}
                                            </span>
                                        </div>

                                        <button
                                            onClick={() => handleQuantityChange(product.id, 1, product.cost)}
                                            className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 active:scale-95 transition-all"
                                        >
                                            <Plus className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>

                                {currentQty > 0 && (
                                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-sm">
                                        -{currentQty * product.cost} Kč
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Right Panel: Summary & Actions */}
            <div className="lg:col-span-1 bg-slate-900 rounded-3xl p-6 text-white flex flex-col shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center text-red-500">
                        <Trash2 className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Odpis Zboží</h2>
                        <p className="text-slate-400 text-sm">Pobočka Václavské nám.</p>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 mb-6">
                    <AnimatePresence>
                        {Object.values(wasteItems).map(item => {
                            const product = MOCK_PRODUCTS.find(p => p.id === item.productId);
                            const reason = WASTE_REASONS.find(r => r.id === item.reasonId);
                            if (!product) return null;

                            return (
                                <motion.div
                                    key={item.productId}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex justify-between items-center"
                                >
                                    <div>
                                        <div className="font-bold">{product.name}</div>
                                        <div className="text-xs text-slate-400 flex items-center gap-2 mt-1">
                                            <span className="bg-slate-700 px-1.5 py-0.5 rounded">{reason?.label}</span>
                                            <span>{item.quantity} ks</span>
                                        </div>
                                    </div>
                                    <div className="font-mono font-bold text-red-400">
                                        -{item.quantity * item.cost} Kč
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    {Object.keys(wasteItems).length === 0 && (
                        <div className="text-center text-slate-600 py-10">
                            <RefreshCw className="w-12 h-12 mx-auto mb-4 opacity-20" />
                            <p>Zatím žádné položky k odpisu</p>
                        </div>
                    )}
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 mb-4">
                    <div className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Dnešní ztráta</div>
                    <div className="text-4xl font-bold text-red-500 font-mono">
                        -{totalLoss.toLocaleString()} Kč
                    </div>
                </div>

                <Button
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white h-14 text-lg font-bold shadow-lg shadow-red-900/20"
                    disabled={totalLoss === 0}
                >
                    <Save className="w-5 h-5 mr-2" />
                    Potvrdit Odpis
                </Button>
            </div>
        </div>
    );
};
