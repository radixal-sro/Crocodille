import { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { KanbanColumn } from '../components/production/KanbanColumn';
import { mockProductionTasks } from '../services/mockData';

const Production = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [tasks] = useState(mockProductionTasks);

    const plannedTasks = tasks.filter(t => t.status === 'PLANNED' && t.startTime);
    const inProgressTasks = tasks.filter(t => t.status === 'IN_PROGRESS');
    const completedTasks = tasks.filter(t => t.status === 'COMPLETED');

    return (
        <div className="h-[calc(100vh-6rem)] flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-display font-bold text-slate-900">Plán výroby</h1>
                    <p className="text-slate-500">Denní plán výroby a stav dávek.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" icon={<Filter size={16} />}>Filtr</Button>
                    <Button icon={<Plus size={16} />}>Nová dávka</Button>
                </div>
            </div>

            <div className="flex-1 flex gap-6 overflow-x-auto pb-4">
                <KanbanColumn
                    title="Naplánováno"
                    tasks={plannedTasks}
                    color="bg-slate-100"
                />
                <KanbanColumn
                    title="Ve výrobě"
                    tasks={inProgressTasks}
                    color="bg-amber-50"
                />
                <KanbanColumn
                    title="Hotovo"
                    tasks={completedTasks}
                    color="bg-green-50"
                />
            </div>
        </div>
    );
};

export default Production;
