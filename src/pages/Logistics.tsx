import { Truck, Calendar, Users, CheckCircle, AlertTriangle } from 'lucide-react';
import { LogisticsMap } from '../components/logistics/LogisticsMap';

export const Logistics = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Logistika & Rozvoz</h1>
                    <p className="text-slate-500 mt-1">Dispečink čerstvého zboží a správa vozového parku</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 font-medium transition-colors">
                        <Calendar className="w-4 h-4" />
                        Plánování směn
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-crocodille-green text-white rounded-lg hover:bg-green-700 font-medium transition-colors shadow-sm">
                        <Truck className="w-4 h-4" />
                        Nová trasa
                    </button>
                </div>
            </div>

            {/* Logistics Map Dashboard */}
            <LogisticsMap />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Aut na cestě', value: '12', icon: Truck, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Doručeno dnes', value: '45', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
                    { label: 'Zpoždění', value: '2', icon: AlertTriangle, color: 'text-orange-600', bg: 'bg-orange-50' },
                    { label: 'Volní řidiči', value: '5', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.bg}`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                        </div>
                        <h3 className="text-slate-500 font-medium">{stat.label}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
