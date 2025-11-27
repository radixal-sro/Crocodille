import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/Card';

const data = [
    { time: '06:00', sales: 4000 },
    { time: '08:00', sales: 12000 },
    { time: '10:00', sales: 28000 },
    { time: '12:00', sales: 45000 },
    { time: '14:00', sales: 38000 },
    { time: '16:00', sales: 32000 },
    { time: '18:00', sales: 25000 },
];

export const SalesChart = () => {
    return (
        <Card title="Vývoj tržeb (Dnes)" className="h-full">
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#13A538" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#13A538" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                        <XAxis
                            dataKey="time"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748B', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748B', fontSize: 12 }}
                            tickFormatter={(value) => `${value / 1000}k`}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#fff',
                                border: '1px solid #E2E8F0',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                            }}
                            itemStyle={{ color: '#13A538', fontWeight: 600 }}
                            formatter={(value: number) => [`${value.toLocaleString()} Kč`, 'Tržby']}
                        />
                        <Area
                            type="monotone"
                            dataKey="sales"
                            stroke="#13A538"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorSales)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};
