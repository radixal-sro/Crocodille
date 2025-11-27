import { Search } from 'lucide-react';
import clsx from 'clsx';

const CATEGORIES = [
    { id: 'ALL', label: 'Vše' },
    { id: 'BAGUETTE', label: 'Bagety' },
    { id: 'SANDWICH', label: 'Sendviče' },
    { id: 'PIZZA', label: 'Pizza' },
    { id: 'INGREDIENT', label: 'Suroviny' },
    { id: 'DRINK', label: 'Nápoje' },
];

interface CatalogFiltersProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export const CatalogFilters = ({
    activeCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange
}: CatalogFiltersProps) => {
    return (
        <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 sticky top-24 z-10 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                {/* Categories */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => onCategoryChange(category.id)}
                            className={clsx(
                                "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                                activeCategory === category.id
                                    ? "bg-croco-green text-white shadow-sm"
                                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                            )}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Hledat produkt..."
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-croco-green/20 focus:border-croco-green"
                    />
                </div>
            </div>
        </div>
    );
};
