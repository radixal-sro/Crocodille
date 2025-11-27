import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Truck, MapPin, Clock } from 'lucide-react';

const ROUTES = [
    { id: 'R-001', driver: 'Petr Svoboda', destination: 'Centrála - Praha', status: 'DELIVERED', time: '06:30' },
    { id: 'R-002', driver: 'Karel Dvořák', destination: 'Brno - Campus', status: 'IN_TRANSIT', time: '09:15', eta: '10:30' },
    { id: 'R-003', driver: 'Milan Černý', destination: 'Plzeň - Plaza', status: 'LOADING', time: '09:45' },
    { id: 'R-004', driver: 'Jan Novotný', destination: 'Ostrava - Forum', status: 'PENDING', time: '12:00' },
];

const Logistics = () => {
    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col lg:flex-row gap-6">
            {/* Sidebar List */}
            <div className="w-full lg:w-96 flex flex-col gap-4">
                <div>
                    <h1 className="text-2xl font-display font-bold text-slate-900">Logistika</h1>
                    <p className="text-slate-500">Sledování rozvozů a vozového parku.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 bg-croco-light border-croco-green/20">
                        <div className="text-2xl font-bold text-croco-green">12</div>
                        <div className="text-xs text-slate-600">Aut na cestě</div>
                    </Card>
                    <Card className="p-4 bg-amber-50 border-amber-200">
                        <div className="text-2xl font-bold text-amber-600">98%</div>
                        <div className="text-xs text-slate-600">Včasnost</div>
                    </Card>
                </div>

                <Card className="flex-1 overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-slate-100 font-medium text-slate-900">
                        Dnešní trasy
                    </div>
                    <div className="overflow-y-auto flex-1 p-2 space-y-2">
                        {ROUTES.map((route) => (
                            <div key={route.id} className="p-3 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-all cursor-pointer group">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-mono text-xs text-slate-400">{route.id}</span>
                                    <Badge variant={
                                        route.status === 'DELIVERED' ? 'success' :
                                            route.status === 'IN_TRANSIT' ? 'info' :
                                                route.status === 'LOADING' ? 'warning' : 'neutral'
                                    } className="text-[10px]">
                                        {route.status}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Truck size={16} className="text-slate-400 group-hover:text-croco-green" />
                                    <span className="font-medium text-slate-900">{route.driver}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600 ml-6">
                                    <MapPin size={14} />
                                    <span>{route.destination}</span>
                                </div>
                                {route.eta && (
                                    <div className="mt-2 ml-6 text-xs text-amber-600 flex items-center gap-1">
                                        <Clock size={12} />
                                        ETA: {route.eta}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Map Visualization (Placeholder) */}
            <Card className="flex-1 min-h-[400px] relative overflow-hidden bg-slate-100 border-slate-200 p-0">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <MapPin size={48} className="mx-auto text-slate-300 mb-4" />
                        <p className="text-slate-500 font-medium">Interaktivní mapa tras</p>
                        <p className="text-sm text-slate-400">Zobrazení GPS polohy vozidel v reálném čase</p>
                    </div>
                </div>

                {/* Simulated Map Points */}
                <div className="absolute top-1/4 left-1/4 animate-pulse">
                    <div className="w-4 h-4 bg-croco-green rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-[10px] font-bold whitespace-nowrap">
                        R-002 (Brno)
                    </div>
                </div>

                <div className="absolute bottom-1/3 right-1/3">
                    <div className="w-4 h-4 bg-amber-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-[10px] font-bold whitespace-nowrap">
                        R-003 (Plzeň)
                    </div>
                </div>

                {/* Map Grid Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
            </Card>
        </div>
    );
};

export default Logistics;
