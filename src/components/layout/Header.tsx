import { Search, Bell, MapPin } from 'lucide-react';

export const Header = () => {
    return (
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10 px-6 flex items-center justify-between">
            {/* Left: Search */}
            <div className="flex items-center gap-4 flex-1">
                <div className="relative w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Hledat produkty, objednávky..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-croco-green/20 focus:border-croco-green transition-all"
                    />
                </div>
            </div>

            {/* Right: Actions & Context */}
            <div className="flex items-center gap-6">
                {/* Branch Context */}
                <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                    <MapPin size={16} className="text-croco-green" />
                    <span className="font-medium">Centrála - Praha</span>
                </div>

                {/* Notifications */}
                <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-fresh-orange rounded-full border-2 border-white"></span>
                </button>
            </div>
        </header>
    );
};
