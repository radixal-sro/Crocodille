import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'success' | 'warning' | 'error' | 'neutral' | 'info';
    className?: string;
}

export const Badge = ({ children, variant = 'neutral', className }: BadgeProps) => {
    const variants = {
        success: "bg-green-50 text-green-700 border-green-200",
        warning: "bg-amber-50 text-amber-700 border-amber-200",
        error: "bg-red-50 text-red-700 border-red-200",
        neutral: "bg-slate-100 text-slate-600 border-slate-200",
        info: "bg-blue-50 text-blue-700 border-blue-200",
    };

    return (
        <span className={clsx(
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
};
