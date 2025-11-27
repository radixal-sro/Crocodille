import { Card } from '../ui/Card';
import { AlertTriangle, Package, Truck, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

const ACTIVITIES = [
    {
        id: 1,
        type: 'warning',
        message: 'Dochází Šunka výběrová (Sklad A)',
        time: '10 min zpět',
        icon: AlertTriangle,
        color: 'text-amber-500 bg-amber-50'
    },
    {
        id: 2,
        type: 'info',
        message: 'Nová objednávka #ORD-005 (BB Pankrác)',
        time: '25 min zpět',
        icon: Package,
        color: 'text-blue-500 bg-blue-50'
    },
    {
        id: 3,
        type: 'success',
        message: 'Závoz pro Brno odeslán',
        time: '1 hod zpět',
        icon: Truck,
        color: 'text-croco-green bg-croco-light'
    },
    {
        id: 4,
        type: 'success',
        message: 'Denní uzávěrka (Včera) dokončena',
        time: '8 hod zpět',
        icon: CheckCircle,
        color: 'text-slate-500 bg-slate-100'
    }
];

export const ActivityFeed = () => {
    return (
        <Card title="Top Alert" className="h-full">
            <div className="space-y-4">
                {ACTIVITIES.map((activity) => (
                    <div key={activity.id} className="flex gap-3 items-start">
                        <div className={clsx("p-2 rounded-lg flex-shrink-0", activity.color)}>
                            <activity.icon size={16} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-800 leading-tight">
                                {activity.message}
                            </p>
                            <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
