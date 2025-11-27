import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableCell } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Edit2, Trash2, UserPlus, Shield } from 'lucide-react';
import { MOCK_USERS } from '../services/mockData';

const Users = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-display font-bold text-slate-900">Správa uživatelů</h1>
                    <p className="text-slate-500">Přehled uživatelů a jejich oprávnění.</p>
                </div>
                <Button icon={<UserPlus size={16} />}>Nový uživatel</Button>
            </div>

            <Card className="overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Uživatel</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Pobočka</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Akce</TableHead>
                        </TableRow>
                    </TableHeader>
                    <tbody>
                        {MOCK_USERS.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=random`}
                                            alt={user.name}
                                            className="w-8 h-8 rounded-full bg-slate-100"
                                        />
                                        <div>
                                            <div className="font-medium text-slate-900">{user.name}</div>
                                            <div className="text-xs text-slate-500">ID: {user.id}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-1.5">
                                        <Shield size={14} className="text-slate-400" />
                                        <span className="font-medium text-slate-700">{user.role}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {user.branchId ? (
                                        <span className="text-slate-600">Pobočka {user.branchId}</span>
                                    ) : (
                                        <span className="text-slate-400 italic">Centrála</span>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Badge variant="success">Aktivní</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                            <Edit2 size={14} />
                                        </Button>
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500 hover:bg-red-50 hover:text-red-600">
                                            <Trash2 size={14} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </div>
    );
};

export default Users;
