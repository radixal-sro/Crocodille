import type { ProductionTask } from '../../types';
import { ProductionCard } from './ProductionCard';

interface KanbanColumnProps {
    title: string;
    count?: number;
    color: string;
    tasks: ProductionTask[];
    onTaskClick?: (task: ProductionTask) => void;
}

export const KanbanColumn = ({ title, color, tasks, onTaskClick }: KanbanColumnProps) => {
    return (
        <div className="flex flex-col bg-slate-50 rounded-xl border border-slate-200 h-full min-w-[320px]">
            <div className={`p-4 border-b border-slate-200 flex items-center justify-between ${color}`}>
                <h3 className="font-semibold text-slate-800">{title}</h3>
                <span className="bg-white/50 px-2 py-0.5 rounded text-sm font-medium text-slate-700">
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
