import React from 'react';
import { ProductionCard } from './ProductionCard';
import type { ProductionTask } from './ProductionCard';
import clsx from 'clsx';

interface KanbanColumnProps {
    title: string;
    tasks: ProductionTask[];
    status: 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED';
    color: string;
    onTaskClick?: (task: ProductionTask) => void;
}

export const KanbanColumn = ({ title, tasks, status, color, onTaskClick }: KanbanColumnProps) => {
    return (
        <div className="flex-1 min-w-[300px] flex flex-col h-full bg-slate-50/50 rounded-xl border border-slate-200/60">
            <div className={clsx("p-3 border-b border-slate-100 rounded-t-xl flex justify-between items-center", color)}>
                <h3 className="font-medium text-slate-900">{title}</h3>
                <span className="bg-white/50 px-2 py-0.5 rounded-full text-xs font-bold text-slate-700">
                    {tasks.length}
                </span>
            </div>

            <div className="p-3 flex-1 overflow-y-auto space-y-3">
                {tasks.map((task) => (
                    <ProductionCard
                        key={task.id}
                        task={task}
                        onClick={() => onTaskClick?.(task)}
                    />
                ))}
                {tasks.length === 0 && (
                    <div className="h-24 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-sm">
                        Žádné úkoly
                    </div>
                )}
            </div>
        </div>
    );
};
