import React, { useState, useEffect } from 'react';
import { CatalogFilters } from '../components/catalog/CatalogFilters';
import { ProductCard } from '../components/catalog/ProductCard';
import { CartSidebar } from '../components/catalog/CartSidebar';
import { ProductService } from '../services';
import type { Product } from '../types';
import { Loader2 } from 'lucide-react';

const Catalog = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('ALL');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const data = await ProductService.getAll();
                setProducts(data);
            } catch (error) {
                console.error('Failed to load products', error);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'ALL' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.code.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex flex-col lg:flex-row gap-6 relative items-start">
            <div className="flex-1 min-w-0">
                <div className="mb-6">
                    <h1 className="text-2xl font-display font-bold text-slate-900">Katalog produktů</h1>
                    <p className="text-slate-500">Vyberte produkty pro objednávku na pobočku.</p>
                </div>

                <CatalogFilters
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                />

                {loading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="animate-spin text-croco-green" size={32} />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                        {filteredProducts.length === 0 && (
                            <div className="col-span-full text-center py-12 text-slate-500">
                                Žádné produkty nenalezeny.
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="w-full lg:w-80 flex-shrink-0">
                <CartSidebar />
            </div>
        </div>
    );
};

export default Catalog;
