import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    ShoppingBag,
    Package,
    Truck,
    Settings,
    ChevronLeft,
    ChevronRight,
    Menu,
    ClipboardList
} from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const NAV_ITEMS = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: ShoppingBag, label: 'Katalog', path: '/catalog' },
    { icon: ClipboardList, label: 'Objednávky', path: '/orders' },
    { icon: Package, label: 'Sklad', path: '/inventory' },
    { icon: Truck, label: 'Logistika', path: '/logistics' },
    { icon: Settings, label: 'Admin', path: '/admin' },
];

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <motion.div
            initial={{ width: 240 }}
            animate={{ width: collapsed ? 80 : 240 }}
            className="h-screen bg-white border-r border-slate-200 flex flex-col sticky top-0 z-20 shadow-sm"
        >
            {/* Logo Area */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-slate-100">
                {!collapsed && (
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-croco-green rounded-lg flex items-center justify-center text-white font-bold">
                            C
                        </div>
                        <span className="font-display font-bold text-xl text-slate-800 tracking-tight">
                            Crocodille
                        </span>
                    </div>
                )}
                {collapsed && (
                    <div className="w-full flex justify-center">
                        <div className="w-8 h-8 bg-croco-green rounded-lg flex items-center justify-center text-white font-bold">
                            C
                        </div>
                    </div>
                )}

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1.5 hover:bg-slate-100 rounded-md text-slate-500 transition-colors absolute -right-3 top-6 bg-white border border-slate-200 shadow-sm"
                >
                    {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-3 space-y-1">
                {NAV_ITEMS.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => clsx(
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                            isActive
                                ? "bg-croco-light text-croco-green font-medium"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        )}
                    >
                        <item.icon size={20} strokeWidth={2} />
                        {!collapsed && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                {item.label}
                            </motion.span>
                        )}

                        {/* Tooltip for collapsed state */}
                        {collapsed && (
                            <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                                {item.label}
                            </div>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* User Profile (Collapsed/Expanded) */}
            <div className="p-4 border-t border-slate-100">
                <div className={clsx("flex items-center gap-3", collapsed && "justify-center")}>
                    <img
                        src="https://i.pravatar.cc/150?u=u1"
                        alt="User"
                        className="w-9 h-9 rounded-full border border-slate-200"
                    />
                    {!collapsed && (
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-900 truncate">Jan Novák</p>
                            <p className="text-xs text-slate-500 truncate">CEO</p>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
