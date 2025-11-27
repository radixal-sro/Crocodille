import React from 'react';
import { Clock, Users, AlertCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import clsx from 'clsx';

export interface ProductionTask {
    id: string;
    productName: string;
    quantity: number;
    unit: string;
    priority: 'HIGH' | 'NORMAL' | 'LOW';
    startTime?: string;
    assignedTo?: string;
}

interface ProductionCardProps {
    task: ProductionTask;
    onClick?: () => void;
}

export const ProductionCard = ({ task, onClick }: ProductionCardProps) => {
    return (
        <div
            onClick={onClick}
            className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
        >
            <div className="flex justify-between items-start mb-2">
                <Badge variant={task.priority === 'HIGH' ? 'error' : 'neutral'} className="text-[10px] px-1.5 py-0">
                    {task.priority === 'HIGH' ? 'Priorita' : 'Normal'}
                </Badge>
                <span className="text-xs text-slate-400 font-mono">#{task.id}</span>
            </div>

            <h4 className="font-medium text-slate-900 mb-1 group-hover:text-croco-green transition-colors">
                {task.productName}
            </h4>

            <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                <span className="font-bold">{task.quantity} {task.unit}</span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-50 pt-2">
                <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{task.startTime || '08:00'}</span>
                </div>
                {task.assignedTo && (
                    <div className="flex items-center gap-1">
                        <Users size={12} />
                        <span>{task.assignedTo}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
