import type { Product, Order, User } from '../types';

export const MOCK_USERS: User[] = [
    { id: 'u1', name: 'Jan Novák', role: 'CEO', avatar: 'https://i.pravatar.cc/150?u=u1' },
    { id: 'u2', name: 'Petr Svoboda', role: 'MANAGER', branchId: 'b1', avatar: 'https://i.pravatar.cc/150?u=u2' },
    { id: 'u3', name: 'Jana Dvořáková', role: 'WAREHOUSE', branchId: 'b2', avatar: 'https://i.pravatar.cc/150?u=u3' },
    { id: 'u4', name: 'Martin Kučera', role: 'WAREHOUSE', branchId: 'b3', avatar: 'https://i.pravatar.cc/150?u=u4' },
    { id: 'u5', name: 'Lucie Veselá', role: 'MANAGER', branchId: 'b4', avatar: 'https://i.pravatar.cc/150?u=u5' },
];

export const MOCK_PRODUCTS: Product[] = [
    {
        id: 'p1',
        code: 'BAG-001',
        name: 'Bageta Šunková',
        category: 'BAGUETTE',
        price: 89,
        cost: 45,
        image: 'https://images.unsplash.com/photo-1662980481719-dfc4e52c1a47?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 150,
        minStockLevel: 50,
        unit: 'ks'
    },
    {
        id: 'p2',
        code: 'SND-002',
        name: 'Crocodille Sendvič',
        category: 'SANDWICH',
        price: 75,
        cost: 38,
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 80,
        minStockLevel: 100,
        unit: 'ks'
    },
    {
        id: 'p3',
        code: 'PAN-003',
        name: 'Panini s kuřecím',
        category: 'BAGUETTE',
        price: 95,
        cost: 48,
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 200,
        minStockLevel: 50,
        unit: 'ks'
    },
    {
        id: 'p4',
        code: 'PIZ-004',
        name: '360 Pizza Salami',
        category: 'PIZZA',
        price: 189,
        cost: 80,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 40,
        minStockLevel: 20,
        unit: 'ks'
    },
    {
        id: 'p5',
        code: 'BAG-005',
        name: 'Bageta Debrecínská',
        category: 'BAGUETTE',
        price: 92,
        cost: 46,
        image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 120,
        minStockLevel: 40,
        unit: 'ks'
    },
    {
        id: 'p6',
        code: 'SND-006',
        name: 'Sendvič Tuňákový',
        category: 'SANDWICH',
        price: 79,
        cost: 40,
        image: 'https://images.unsplash.com/photo-1557019694-fec6e69c5a76?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 60,
        minStockLevel: 30,
        unit: 'ks'
    },
    {
        id: 'p7',
        code: 'DRK-007',
        name: 'Ledový čaj Broskev',
        category: 'DRINK',
        price: 45,
        cost: 20,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 300,
        minStockLevel: 100,
        unit: 'ks'
    },
    {
        id: 'ing1',
        code: 'ING-001',
        name: 'Mouka pšeničná hladká',
        category: 'INGREDIENT',
        price: 15,
        cost: 15,
        image: 'https://images.unsplash.com/photo-1627485937980-221c88ac04f9?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 5000,
        minStockLevel: 1000,
        unit: 'kg'
    },
    {
        id: 'ing2',
        code: 'ING-002',
        name: 'Šunka výběrová (90% masa)',
        category: 'INGREDIENT',
        price: 250,
        cost: 250,
        image: 'https://images.unsplash.com/photo-1524438415277-3c06eef13e33?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 120,
        minStockLevel: 200, // Low stock alert
        unit: 'kg'
    },
    {
        id: 'ing3',
        code: 'ING-003',
        name: 'Sýr Eidam 30%',
        category: 'INGREDIENT',
        price: 180,
        cost: 180,
        image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 80,
        minStockLevel: 150, // Low stock alert
        unit: 'kg'
    },
    {
        id: 'ing4',
        code: 'ING-004',
        name: 'Rajčata čerstvá',
        category: 'INGREDIENT',
        price: 45,
        cost: 45,
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 500,
        minStockLevel: 100,
        unit: 'kg'
    }
];

export const MOCK_ORDERS: Order[] = [
    {
        id: 'ord-001',
        branchId: 'b1',
        branchName: 'BB Václavské náměstí',
        createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
        status: 'NEW',
        items: [
            { productId: 'p1', productName: 'Bageta Šunková', quantity: 50, price: 89 },
            { productId: 'p2', productName: 'Crocodille Sendvič', quantity: 30, price: 75 },
            { productId: 'p7', productName: 'Ledový čaj Broskev', quantity: 40, price: 45 },
        ],
        totalPrice: 8500
    },
    {
        id: 'ord-002',
        branchId: 'b2',
        branchName: 'BB Arkády Pankrác',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        status: 'APPROVED',
        items: [
            { productId: 'p4', productName: '360 Pizza Salami', quantity: 20, price: 189 },
            { productId: 'p5', productName: 'Bageta Debrecínská', quantity: 15, price: 92 },
        ],
        totalPrice: 5160
    },
    {
        id: 'ord-003',
        branchId: 'b3',
        branchName: 'Výroba Žiželice',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
        status: 'SHIPPED',
        items: [
            { productId: 'ing1', productName: 'Mouka pšeničná hladká', quantity: 1000, price: 15 },
            { productId: 'ing4', productName: 'Rajčata čerstvá', quantity: 200, price: 45 },
        ],
        totalPrice: 24000
    },
    {
        id: 'ord-004',
        branchId: 'b4',
        branchName: 'BB Letňany',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
        status: 'DELIVERED',
        items: [
            { productId: 'p1', productName: 'Bageta Šunková', quantity: 100, price: 89 },
        ],
        totalPrice: 8900
    },
    {
        id: 'ord-005',
        branchId: 'b1',
        branchName: 'BB Václavské náměstí',
        createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 mins ago
        status: 'NEW',
        items: [
            { productId: 'p3', productName: 'Panini s kuřecím', quantity: 25, price: 95 },
            { productId: 'p6', productName: 'Sendvič Tuňákový', quantity: 20, price: 79 },
        ],
        totalPrice: 3955
    },
    {
        id: 'ord-001',
        branchId: 'b1',
        branchName: 'BB Václavské náměstí',
        createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
        status: 'NEW',
        items: [
            { productId: 'p1', productName: 'Bageta Šunková', quantity: 50, price: 89 },
            { productId: 'p2', productName: 'Crocodille Sendvič', quantity: 30, price: 75 },
            { productId: 'p7', productName: 'Ledový čaj Broskev', quantity: 40, price: 45 },
        ],
        totalPrice: 8500
    },
    {
        id: 'ord-002',
        branchId: 'b2',
        branchName: 'BB Arkády Pankrác',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        status: 'APPROVED',
        items: [
            { productId: 'p4', productName: '360 Pizza Salami', quantity: 20, price: 189 },
            { productId: 'p5', productName: 'Bageta Debrecínská', quantity: 15, price: 92 },
        ],
        totalPrice: 5160
    },
    {
        id: 'ord-003',
        branchId: 'b3',
        branchName: 'Výroba Žiželice',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
        status: 'SHIPPED',
        items: [
            { productId: 'ing1', productName: 'Mouka pšeničná hladká', quantity: 1500, price: 15 },
            { productId: 'ing4', productName: 'Rajčata čerstvá', quantity: 300, price: 45 },
        ],
        totalPrice: 36000
    },
    {
        id: 'ord-004',
        branchId: 'b4',
        branchName: 'BB Letňany',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
        status: 'DELIVERED',
        items: [
            { productId: 'p1', productName: 'Bageta Šunková', quantity: 100, price: 89 },
        ],
        totalPrice: 8900
    },
    {
        id: 'ord-005',
        branchId: 'b1',
        branchName: 'BB Václavské náměstí',
        createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 mins ago
        status: 'NEW',
        items: [
            { productId: 'p3', productName: 'Panini s kuřecím', quantity: 75, price: 95 },
            { productId: 'p6', productName: 'Sendvič Tuňákový', quantity: 50, price: 79 },
        ],
        totalPrice: 11075
    },
    {
        id: 'ord-001',
        branchId: 'b1',
        branchName: 'BB Václavské náměstí',
        createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
        status: 'NEW',
        items: [
            { productId: 'p1', productName: 'Bageta Šunková', quantity: 50, price: 89 },
            { productId: 'p2', productName: 'Crocodille Sendvič', quantity: 30, price: 75 },
            { productId: 'p7', productName: 'Ledový čaj Broskev', quantity: 40, price: 45 },
        ],
        totalPrice: 8500
    },
    {
        id: 'ord-002',
        branchId: 'b2',
        branchName: 'BB Arkády Pankrác',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        status: 'APPROVED',
        items: [
            { productId: 'p4', productName: '360 Pizza Salami', quantity: 20, price: 189 },
            { productId: 'p5', productName: 'Bageta Debrecínská', quantity: 15, price: 92 },
        ],
        totalPrice: 5160
    },
    {
        id: 'ord-003',
        branchId: 'b3',
        branchName: 'Výroba Žiželice',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
        status: 'SHIPPED',
        items: [
            { productId: 'ing1', productName: 'Mouka pšeničná hladká', quantity: 1000, price: 15 },
            { productId: 'ing4', productName: 'Rajčata čerstvá', quantity: 200, price: 45 },
        ],
        totalPrice: 24000
    },
    {
        id: 'ord-004',
        branchId: 'b4',
        branchName: 'BB Letňany',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
        status: 'DELIVERED',
        items: [
            { productId: 'p1', productName: 'Bageta Šunková', quantity: 200, price: 89 },
        ],
        totalPrice: 17800
    },
    {
        id: 'ord-005',
        branchId: 'b1',
        branchName: 'BB Václavské náměstí',
        createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 mins ago
        status: 'NEW',
        items: [
            { productId: 'p3', productName: 'Panini s kuřecím', quantity: 250, price: 95 },
            { productId: 'p6', productName: 'Sendvič Tuňákový', quantity: 200, price: 79 },
        ],
        totalPrice: 39550
    }
];

export const mockProductionTasks: import('../types').ProductionTask[] = [
    {
        id: 't1',
        productName: 'Bageta Šunková',
        quantity: 150,
        unit: 'ks',
        priority: 'HIGH',
        startTime: '06:00',
        assignedTo: 'Jan K.',
        status: 'IN_PROGRESS'
    },
    {
        id: 't2',
        productName: 'Crocodille Sendvič',
        quantity: 80,
        unit: 'ks',
        priority: 'NORMAL',
        startTime: '08:00',
        status: 'PLANNED'
    },
    {
        id: 't3',
        productName: 'Panini s kuřecím',
        quantity: 200,
        unit: 'ks',
        priority: 'LOW',
        status: 'PLANNED'
    },
    {
        id: 't4',
        productName: '360 Pizza Salami',
        quantity: 50,
        unit: 'ks',
        priority: 'NORMAL',
        startTime: '10:00',
        status: 'COMPLETED'
    }
];
