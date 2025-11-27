import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, Activity, AlertCircle } from 'lucide-react';
import { MOCK_PRODUCTS } from '../services/mockData';
import { RecipeVisualizer } from '../components/product/RecipeVisualizer';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const product = MOCK_PRODUCTS.find(p => p.id === id);

    if (!product) {
        return (
            <div className="p-8 text-center">
                <h2 className="text-xl font-bold text-slate-800">Produkt nenalezen</h2>
                <Button onClick={() => navigate('/catalog')} className="mt-4">
                    Zpět do katalogu
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" onClick={() => navigate('/catalog')}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Zpět
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>
                        <div className="flex items-center gap-2 text-slate-500 mt-1">
                            <span className="font-mono text-sm bg-slate-100 px-2 py-0.5 rounded">{product.code}</span>
                            <span>•</span>
                            <span>{product.category}</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Badge variant={product.status === 'ACTIVE' ? 'success' : 'neutral'}>
                        {product.status}
                    </Badge>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Left Column: Image & Quick Stats */}
                <div className="xl:col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-sm">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover rounded-xl"
                        />
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Package className="w-5 h-5 text-crocodille-green" />
                            Skladová zásoba
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-500">Aktuální stav</span>
                                    <span className="font-bold text-slate-900">{product.stockLevel} {product.unit}</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div
                                        className="bg-crocodille-green h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${Math.min((product.stockLevel / (product.minStockLevel * 2)) * 100, 100)}%` }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <span className="text-sm text-slate-500">Minimální stav</span>
                                <span className="font-mono font-bold text-slate-700">{product.minStockLevel} {product.unit}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Recipe Visualizer */}
                <div className="xl:col-span-2">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                <Activity className="w-6 h-6 text-crocodille-green" />
                                Visual Recipe Inspector
                            </h2>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                v2.0 Beta
                            </Badge>
                        </div>

                        <RecipeVisualizer productId={product.id} />
                    </div>
                </div>
            </div>
        </div>
    );
};
