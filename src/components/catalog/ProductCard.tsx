import { Plus, AlertCircle } from 'lucide-react';
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
        <Card className="h-full flex flex-col group hover:border-croco-green/30 transition-colors">
            <div className="relative aspect-video -mx-6 -mt-6 mb-4 overflow-hidden bg-slate-100">
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
            </div>

            <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-xs text-slate-500 font-medium">{product.code}</p>
                        <h3 className="font-bold text-slate-900 line-clamp-2">{product.name}</h3>
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
