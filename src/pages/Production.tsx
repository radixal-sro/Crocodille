import React, { useState } from 'react';
import { KanbanColumn } from '../components/production/KanbanColumn';
import type { ProductionTask } from '../components/production/ProductionCard';
import { Button } from '../components/ui/Button';
import { Plus, Filter } from 'lucide-react';

const MOCK_TASKS: ProductionTask[] = [
    { id: 'P-101', productName: 'Bageta Šunková', quantity: 150, unit: 'ks', priority: 'HIGH', startTime: '06:00', assignedTo: 'Tým A' },
    { id: 'P-102', productName: 'Sendvič Kuřecí', quantity: 80, unit: 'ks', priority: 'NORMAL', startTime: '07:30', assignedTo: 'Tým B' },
    { id: 'P-103', productName: 'Pizza Šunková', quantity: 40, unit: 'ks', priority: 'LOW', startTime: '09:00' },
    { id: 'P-104', productName: 'Bageta Sýrová', quantity: 120, unit: 'ks', priority: 'NORMAL', startTime: '08:00', assignedTo: 'Tým A' },
    { id: 'P-105', productName: 'Wrap Caesar', quantity: 60, unit: 'ks', priority: 'HIGH', startTime: '10:00' },
];

const Production = () => {
    const [tasks, setTasks] = useState(MOCK_TASKS);

    // Simple state simulation for the prototype
    const plannedTasks = tasks.filter(t => !t.assignedTo && t.startTime > '08:30'); // Just a mock filter logic
    const inProgressTasks = tasks.filter(t => t.assignedTo && t.priority !== 'LOW');
    const completedTasks = tasks.filter(t => t.priority === 'LOW'); // Mock logic

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col">
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
                    status="PLANNED"
                    color="bg-slate-100"
                />
                <KanbanColumn
                    title="Ve výrobě"
                    tasks={inProgressTasks}
                    status="IN_PROGRESS"
                    color="bg-amber-50"
                />
                <KanbanColumn
                    title="Hotovo"
                    tasks={completedTasks}
                    status="COMPLETED"
                    color="bg-green-50"
                />
            </div>
        </div>
    );
};

export default Production;
