import React from 'react';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export const CartSidebar = () => {
    const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

    if (items.length === 0) {
        return (
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center sticky top-24">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400">
                    <ShoppingBag size={24} />
                </div>
                <h3 className="font-medium text-slate-900">Košík je prázdný</h3>
                <p className="text-sm text-slate-500 mt-1">Vyberte produkty z katalogu</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl border border-slate-200 flex flex-col sticky top-24 max-h-[calc(100vh-8rem)]">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                <h3 className="font-display font-semibold text-slate-800 flex items-center gap-2">
                    <ShoppingBag size={18} className="text-croco-green" />
                    Nová objednávka
                </h3>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <AnimatePresence initial={false}>
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex gap-3"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 rounded-lg object-cover bg-slate-100 flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium text-slate-900 truncate">{item.name}</h4>
                                <p className="text-xs text-slate-500 mb-2">{item.price} Kč / {item.unit}</p>

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center border border-slate-200 rounded-md">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-2 py-0.5 hover:bg-slate-50 text-slate-600"
                                        >-</button>
                                        <span className="px-2 text-xs font-medium w-8 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-2 py-0.5 hover:bg-slate-50 text-slate-600"
                                        >+</button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-slate-400 hover:text-red-500 transition-colors ml-auto"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50/50 rounded-b-xl">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-600">Celkem bez DPH</span>
                    <span className="font-bold text-lg text-slate-900">{totalPrice.toLocaleString()} Kč</span>
                </div>
                <Button className="w-full" size="lg" icon={<ArrowRight size={18} />}>
                    Dokončit objednávku
                </Button>
            </div>
        </div>
    );
};
