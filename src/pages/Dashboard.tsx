import { KPICard } from '../components/dashboard/KPICard';
import { SalesChart } from '../components/dashboard/SalesChart';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import type { KPI } from '../types';
import { Button } from '../components/ui/Button';
import { Download, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_KPIS: KPI[] = [
    { label: 'Dnešní tržby', value: '128 450 Kč', change: 12.5, trend: 'UP', period: 'včera' },
    { label: 'Vyrobené kusy', value: '3 450 ks', change: -2.1, trend: 'DOWN', period: 'plán' },
    { label: 'Skladová hodnota', value: '1.2M Kč', change: 0, trend: 'NEUTRAL', period: 'minulý týden' },
    { label: 'Počet objednávek', value: '45', change: 8.4, trend: 'UP', period: 'včera' },
];

const Dashboard = () => {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-display font-bold text-slate-900">Přehled</h1>
                    <p className="text-slate-500">Vítejte zpět, pane Nováku. Zde je přehled dnešního dne.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="secondary" size="sm" icon={<Calendar size={14} />}>
                        Dnes: 27. Listopad
                    </Button>
                    <Button variant="primary" size="sm" icon={<Download size={14} />}>
                        Exportovat report
                    </Button>
                </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {MOCK_KPIS.map((kpi, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <KPICard kpi={kpi} />
                    </motion.div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[400px]">
                <motion.div
                    className="lg:col-span-2 h-full"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <SalesChart />
                </motion.div>
                <motion.div
                    className="h-full"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <ActivityFeed />
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
