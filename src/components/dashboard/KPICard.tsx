import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { Card } from '../ui/Card';
import clsx from 'clsx';
import type { KPI } from '../../types';

interface KPICardProps {
    kpi: KPI;
}

export const KPICard = ({ kpi }: KPICardProps) => {
    const isPositive = kpi.trend === 'UP';
    const isNeutral = kpi.trend === 'NEUTRAL';

    return (
        <Card className="hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
                <div className="flex items-baseline gap-2">
                    <h2 className="text-2xl font-bold text-slate-900">{kpi.value}</h2>
                    <div className={clsx(
                        "flex items-center text-xs font-medium px-1.5 py-0.5 rounded-full",
                        isPositive && "bg-green-50 text-green-700",
                        !isPositive && !isNeutral && "bg-red-50 text-red-700",
                        isNeutral && "bg-slate-100 text-slate-600"
                    )}>
                        {isPositive && <ArrowUpRight size={12} className="mr-0.5" />}
                        {!isPositive && !isNeutral && <ArrowDownRight size={12} className="mr-0.5" />}
                        {isNeutral && <Minus size={12} className="mr-0.5" />}
                        {Math.abs(kpi.change)}%
                    </div>
                </div>
                <p className="text-xs text-slate-400 mt-1">vs. {kpi.period}</p>
            </div>
        </Card>
    );
};
