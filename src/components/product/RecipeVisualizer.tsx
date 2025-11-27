import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, DollarSign, TrendingUp } from 'lucide-react';
import clsx from 'clsx';
import { MOCK_RECIPES } from '../../services/mockData';

interface RecipeVisualizerProps {
    productId: string;
}

export const RecipeVisualizer: React.FC<RecipeVisualizerProps> = ({ productId }) => {
    const recipe = MOCK_RECIPES[productId];
    const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

    if (!recipe) {
        return (
            <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                <Info className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                <p>Pro tento produkt není dostupná vizualizace receptury.</p>
            </div>
        );
    }

    const totalCost = recipe.reduce((sum, layer) => sum + layer.cost, 0);
    const recommendedPrice = totalCost * 2.5; // Simple markup logic
    const margin = ((recommendedPrice - totalCost) / recommendedPrice) * 100;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Visual Stack */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center py-12 bg-white rounded-2xl border border-slate-200 shadow-sm relative">
                <h3 className="text-lg font-bold text-slate-800 mb-8 z-10">Složení Bagety</h3>

                <div className="flex flex-col-reverse w-64 gap-1 z-10">
                    {recipe.map((layer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onMouseEnter={() => setHoveredLayer(index)}
                            onMouseLeave={() => setHoveredLayer(null)}
                            className={clsx(
                                "relative cursor-pointer transition-all duration-200 border rounded-lg px-4 py-3 flex items-center justify-between group",
                                hoveredLayer === index
                                    ? "border-crocodille-green bg-green-50 shadow-md z-10 scale-[1.02]"
                                    : "border-slate-200 bg-white hover:border-crocodille-green/50 hover:bg-slate-50"
                            )}
                            style={{
                                height: `${Math.max(48, parseInt(layer.amount))}px`,
                            }}
                        >
                            {/* Layer Label */}
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider w-24 flex-shrink-0 text-left">
                                {layer.layer}
                            </span>

                            {/* Ingredient Name */}
                            <span className={clsx(
                                "font-bold text-sm truncate flex-1 text-right transition-colors",
                                hoveredLayer === index ? "text-crocodille-green" : "text-slate-700"
                            )}>
                                {layer.ingredient}
                            </span>

                            {/* Connector Line (Only visible on hover) */}
                            {hoveredLayer === index && (
                                <motion.div
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    animate={{ opacity: 1, scaleX: 1 }}
                                    className="absolute top-1/2 left-full w-8 h-px bg-crocodille-green origin-left hidden lg:block"
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-crocodille-green rounded-full" />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right Column: Details & KPIs */}
            <div className="lg:col-span-2 space-y-6">
                {/* KPI Cards */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 text-slate-500 mb-1">
                            <DollarSign className="w-4 h-4" />
                            <span className="text-xs font-medium uppercase">Food Cost</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-900">{totalCost.toFixed(2)} Kč</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 text-slate-500 mb-1">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-xs font-medium uppercase">Doporučená Cena</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-900">{recommendedPrice.toFixed(0)} Kč</div>
                    </div>
                    <div className={clsx("p-4 rounded-xl border shadow-sm", margin > 55 ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200")}>
                        <div className="flex items-center gap-2 text-slate-500 mb-1">
                            <span className="text-xs font-medium uppercase">Marže</span>
                        </div>
                        <div className={clsx("text-2xl font-bold", margin > 55 ? "text-green-700" : "text-yellow-700")}>
                            {margin.toFixed(1)}%
                        </div>
                    </div>
                </div>

                {/* Layer Detail View */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm h-64 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {hoveredLayer !== null ? (
                            <motion.div
                                key="detail"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="p-6 h-full flex flex-col justify-center"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-crocodille-green uppercase tracking-wider mb-1">
                                            {recipe[hoveredLayer].layer}
                                        </h4>
                                        <h2 className="text-3xl font-bold text-slate-900">
                                            {recipe[hoveredLayer].ingredient}
                                        </h2>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-slate-500">Množství</div>
                                        <div className="text-xl font-bold text-slate-900">{recipe[hoveredLayer].amount}</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-8 mt-4">
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase font-semibold mb-2">Dodavatel</div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                                                {recipe[hoveredLayer].supplier[0]}
                                            </div>
                                            <span className="font-medium text-slate-800">{recipe[hoveredLayer].supplier}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase font-semibold mb-2">Alergeny</div>
                                        <div className="flex gap-2">
                                            {recipe[hoveredLayer].allergens.length > 0 ? (
                                                recipe[hoveredLayer].allergens.map(a => (
                                                    <span key={a} className="px-2 py-1 bg-red-50 text-red-700 text-xs font-bold rounded border border-red-100">
                                                        {a}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="text-slate-400 text-sm italic">Bez alergenů</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-slate-400"
                            >
                                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4">
                                    <Info className="w-8 h-8" />
                                </div>
                                <p className="text-lg font-medium">Najeďte myší na vrstvu bagety pro zobrazení detailů</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
