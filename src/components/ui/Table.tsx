import React from 'react';
import clsx from 'clsx';

export const Table = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className="w-full overflow-auto">
        <table className={clsx("w-full text-left text-sm", className)}>
            {children}
        </table>
    </div>
);

export const TableHeader = ({ children }: { children: React.ReactNode }) => (
    <thead className="bg-slate-50 border-b border-slate-200">
        {children}
    </thead>
);

export const TableRow = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
    <tr
        onClick={onClick}
        className={clsx(
            "border-b border-slate-100 last:border-0 transition-colors",
            onClick && "cursor-pointer hover:bg-slate-50",
            className
        )}
    >
        {children}
    </tr>
);

export const TableHead = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <th className={clsx("h-10 px-4 text-slate-500 font-medium", className)}>
        {children}
    </th>
);

export const TableCell = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <td className={clsx("p-4 align-middle text-slate-700", className)}>
        {children}
    </td>
);
