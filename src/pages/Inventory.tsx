import { useState, useEffect } from 'react';
import { Search, AlertTriangle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Table, TableHeader, TableRow, TableHead, TableCell } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import clsx from 'clsx';
import { ProductService } from '../services';
import type { Product } from '../types';

const Inventory = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const loadInventory = async () => {
            try {
                const data = await ProductService.getInventory();
                setProducts(data);
            } catch (error) {
                console.error('Failed to load inventory', error);
            }
        };
        loadInventory();
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.code.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-display font-bold text-slate-900">Skladové zásoby</h1>
                    <p className="text-slate-500">Přehled surovin a produktů na skladě.</p>
                </div>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Hledat položku..."
                        className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-croco-green/20 focus:border-croco-green"
                    />
                </div>
            </div>

            <Card className="overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Kód</TableHead>
                            <TableHead>Název položky</TableHead>
                            <TableHead>Kategorie</TableHead>
                            <TableHead>Stav skladu</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Akce</TableHead>
                        </TableRow>
                    </TableHeader>
                    <tbody>
                        {filteredProducts.map((product) => {
                            const isLowStock = product.stockLevel < product.minStockLevel;
                            const stockPercentage = Math.min(100, (product.stockLevel / (product.minStockLevel * 2)) * 100);

                            return (
                                <TableRow key={product.id}>
                                    <TableCell className="font-mono text-xs text-slate-500">{product.code}</TableCell>
                                    <TableCell className="font-medium text-slate-900">{product.name}</TableCell>
                                    <TableCell>
                                        <Badge variant="neutral">{product.category}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="w-full max-w-[140px]">
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className={clsx("font-medium", isLowStock ? "text-red-600" : "text-slate-700")}>
                                                    {product.stockLevel} {product.unit}
                                                </span>
                                                <span className="text-slate-400">min. {product.minStockLevel}</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div
                                                    className={clsx("h-full rounded-full", isLowStock ? "bg-red-500" : "bg-croco-green")}
                                                    style={{ width: `${stockPercentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {isLowStock ? (
                                            <Badge variant="error" className="gap-1">
                                                <AlertTriangle size={10} />
                                                Nízký stav
                                            </Badge>
                                        ) : (
                                            <Badge variant="success">Skladem</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {isLowStock && (
                                            <Button variant="secondary" size="sm" className="text-xs h-7">
                                                Objednat
                                            </Button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </tbody>
                </Table>
            </Card>
        </div>
    );
};

export default Inventory;
