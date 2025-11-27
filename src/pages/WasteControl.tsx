import { WasteManager } from '../components/branch/WasteManager';
import { Badge } from '../components/ui/Badge';

export const WasteControl = () => {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Odpis Zboží</h1>
                    <p className="text-slate-500 mt-1">Evidence ztrát a poškozeného zboží na pobočce</p>
                </div>
                <Badge variant="error" className="text-lg px-4 py-2">
                    Tablet Mode Active
                </Badge>
            </div>

            <WasteManager />
        </div>
    );
};
