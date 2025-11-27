import { Plus, AlertCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();
    const isLowStock = product.stockLevel < product.minStockLevel;

    return (
        <Card className="h-full flex flex-col group hover:border-croco-green/30 transition-colors relative">
            <Link to={`/products/${product.id}`} className="block relative aspect-video -mx-6 -mt-6 mb-4 overflow-hidden bg-slate-100 cursor-pointer">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                    {isLowStock && (
                        <Badge variant="warning" className="shadow-sm">
                            <AlertCircle size={12} className="mr-1" />
                            Poslední kusy
                        </Badge>
                    )}
                </div>

                {/* Hover Overlay with "View Detail" hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 flex items-center gap-2 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye size={14} />
                        Detail
                    </div>
                </div>
            </Link>

            <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-xs text-slate-500 font-medium">{product.code}</p>
                        <Link to={`/products/${product.id}`} className="hover:text-croco-green transition-colors">
                            <h3 className="font-bold text-slate-900 line-clamp-2">{product.name}</h3>
                        </Link>
                    </div>
                </div>

                <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-400">Cena za {product.unit}</span>
                        <span className="font-bold text-lg text-croco-green">{product.price} Kč</span>
                    </div>
                    <Button
                        size="sm"
                        onClick={() => addToCart(product)}
                        className="rounded-full w-8 h-8 p-0"
                    >
                        <Plus size={18} />
                    </Button>
                </div>
            </div>
        </Card>
    );
};
