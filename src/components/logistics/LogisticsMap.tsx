import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, MapPin, Thermometer, Clock, Navigation, CheckCircle, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';
import { MOCK_ROUTES } from '../../services/mockData';

export const LogisticsMap = () => {
    const [selectedRouteId, setSelectedRouteId] = useState<string | null>(null);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
            {/* Left Panel: Route List */}
            <div className="lg:col-span-1 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                        <Navigation className="w-5 h-5 text-crocodille-green" />
                        Aktivní Trasy
                    </h3>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {MOCK_ROUTES.map(route => (
                        <div
                            key={route.id}
                            onClick={() => setSelectedRouteId(route.id)}
                            className={clsx(
                                "p-4 rounded-xl border cursor-pointer transition-all duration-200 hover:shadow-md",
                                selectedRouteId === route.id
                                    ? "border-crocodille-green bg-green-50/30 ring-1 ring-crocodille-green"
                                    : "border-slate-200 bg-white hover:border-crocodille-green/50"
                            )}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-slate-800">{route.name}</h4>
                                <span className={clsx(
                                    "px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider",
                                    route.status === 'ON_ROAD' && "bg-blue-100 text-blue-700",
                                    route.status === 'DELIVERED' && "bg-green-100 text-green-700",
                                    route.status === 'LOADING' && "bg-yellow-100 text-yellow-700"
                                )}>
                                    {route.status.replace('_', ' ')}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm text-slate-500">
                                    <span className="flex items-center gap-1.5">
                                        <Truck className="w-4 h-4" />
                                        {route.vehicle}
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div>
                                    <div className="flex justify-between text-xs mb-1.5">
                                        <span className="text-slate-500 font-medium">Progres trasy</span>
                                        <span className="font-bold text-slate-700">{route.progress}%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                        <div
                                            className={clsx(
                                                "h-full rounded-full transition-all duration-1000",
                                                route.status === 'DELIVERED' ? "bg-green-500" : "bg-blue-500"
                                            )}
                                            style={{ width: `${route.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Panel: Map Visualization */}
            <div className="lg:col-span-2 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner relative overflow-hidden group">
                {/* Map Background Placeholder */}
                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/14.4378,50.0755,12,0/800x600?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2xsZ3J3b3MwMHZtMnBwZ3Z3b3Z3b3Z3In0.example')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />

                {/* Grid Overlay for "Tech" feel */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Vehicle Pins */}
                {MOCK_ROUTES.map(route => (
                    <motion.div
                        key={route.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute"
                        style={{
                            left: `${route.coordinates.x}%`,
                            top: `${route.coordinates.y}%`
                        }}
                    >
                        {/* Pulse Effect for Active Routes */}
                        {route.status === 'ON_ROAD' && (
                            <div className="absolute -inset-4 bg-blue-500/20 rounded-full animate-ping" />
                        )}

                        <div
                            className={clsx(
                                "relative z-10 w-10 h-10 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-transform hover:scale-110 border-2",
                                route.status === 'ON_ROAD' ? "bg-blue-600 border-white text-white" :
                                    route.status === 'DELIVERED' ? "bg-green-600 border-white text-white" :
                                        "bg-yellow-500 border-white text-white"
                            )}
                            onClick={() => setSelectedRouteId(route.id)}
                        >
                            <Truck className="w-5 h-5" />
                        </div>

                        {/* Popover Detail */}
                        <AnimatePresence>
                            {selectedRouteId === route.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-50"
                                >
                                    <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-100">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                                            {route.driver.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">{route.driver}</div>
                                            <div className="text-xs text-slate-500">Řidič</div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg">
                                            <div className="flex items-center gap-2 text-slate-600 text-sm">
                                                <Thermometer className="w-4 h-4" />
                                                <span>Teplota</span>
                                            </div>
                                            <span className={clsx(
                                                "font-bold font-mono",
                                                route.temperature > 5 ? "text-red-600" : "text-green-600"
                                            )}>
                                                {route.temperature}°C
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg">
                                            <div className="flex items-center gap-2 text-slate-600 text-sm">
                                                <MapPin className="w-4 h-4" />
                                                <span>Zastávky</span>
                                            </div>
                                            <span className="font-bold text-slate-900">
                                                {route.totalStops - route.stopsRemaining} / {route.totalStops}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-slate-200" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
