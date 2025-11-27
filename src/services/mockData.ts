import type { Product, Order, User } from '../types';

export const MOCK_USERS: User[] = [
    { id: 'u1', name: 'Jan Novák', role: 'CEO', avatar: 'https://i.pravatar.cc/150?u=u1' },
    { id: 'u2', name: 'Petr Svoboda', role: 'MANAGER', branchId: 'b1', avatar: 'https://i.pravatar.cc/150?u=u2' },
    { id: 'u3', name: 'Jana Dvořáková', role: 'WAREHOUSE', branchId: 'b2', avatar: 'https://i.pravatar.cc/150?u=u3' },
    { id: 'u4', name: 'Martin Kučera', role: 'WAREHOUSE', branchId: 'b3', avatar: 'https://i.pravatar.cc/150?u=u4' },
    { id: 'u5', name: 'Lucie Veselá', role: 'MANAGER', branchId: 'b4', avatar: 'https://i.pravatar.cc/150?u=u5' },
    // Expanded Users
    { id: 'u6', name: 'Tomáš Černý', role: 'DRIVER', branchId: 'b1', avatar: 'https://i.pravatar.cc/150?u=u6' },
    { id: 'u7', name: 'Eva Procházková', role: 'WAREHOUSE', branchId: 'b2', avatar: 'https://i.pravatar.cc/150?u=u7' },
    { id: 'u8', name: 'Michal Horák', role: 'MANAGER', branchId: 'b3', avatar: 'https://i.pravatar.cc/150?u=u8' },
    { id: 'u9', name: 'Kateřina Němcová', role: 'CEO', avatar: 'https://i.pravatar.cc/150?u=u9' },
    { id: 'u10', name: 'David Marek', role: 'DRIVER', branchId: 'b4', avatar: 'https://i.pravatar.cc/150?u=u10' },
    { id: 'u11', name: 'Lenka Králová', role: 'WAREHOUSE', branchId: 'b1', avatar: 'https://i.pravatar.cc/150?u=u11' },
    { id: 'u12', name: 'Jakub Pospíšil', role: 'MANAGER', branchId: 'b2', avatar: 'https://i.pravatar.cc/150?u=u12' },
    { id: 'u13', name: 'Anna Fialová', role: 'DRIVER', branchId: 'b3', avatar: 'https://i.pravatar.cc/150?u=u13' },
    { id: 'u14', name: 'Ondřej Beneš', role: 'WAREHOUSE', branchId: 'b4', avatar: 'https://i.pravatar.cc/150?u=u14' },
    { id: 'u15', name: 'Martina Vlčková', role: 'MANAGER', branchId: 'b1', avatar: 'https://i.pravatar.cc/150?u=u15' },
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
    // Expanded Products
    {
        id: 'p8',
        code: 'BAG-008',
        name: 'Bageta Sýrová',
        category: 'BAGUETTE',
        price: 85,
        cost: 42,
        image: 'https://images.unsplash.com/photo-1626078299034-7bb6d5d8957d?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 100,
        minStockLevel: 40,
        unit: 'ks'
    },
    {
        id: 'p9',
        code: 'SND-009',
        name: 'Sendvič Vajíčkový',
        category: 'SANDWICH',
        price: 69,
        cost: 35,
        image: 'https://images.unsplash.com/photo-1553909489-cd47e3b4430f?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 70,
        minStockLevel: 30,
        unit: 'ks'
    },
    {
        id: 'p10',
        code: 'PAN-010',
        name: 'Panini Mozzarella',
        category: 'BAGUETTE',
        price: 99,
        cost: 50,
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 180,
        minStockLevel: 60,
        unit: 'ks'
    },
    {
        id: 'p11',
        code: 'PIZ-011',
        name: '360 Pizza Quattro Formaggi',
        category: 'PIZZA',
        price: 199,
        cost: 85,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 30,
        minStockLevel: 15,
        unit: 'ks'
    },
    {
        id: 'p12',
        code: 'DRK-012',
        name: 'Limonáda Citron',
        category: 'DRINK',
        price: 39,
        cost: 15,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 400,
        minStockLevel: 120,
        unit: 'ks'
    },
    {
        id: 'p13',
        code: 'BAG-013',
        name: 'Bageta Kuřecí Strips',
        category: 'BAGUETTE',
        price: 95,
        cost: 48,
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 130,
        minStockLevel: 45,
        unit: 'ks'
    },
    {
        id: 'p14',
        code: 'SND-014',
        name: 'Wrap Caesar',
        category: 'SANDWICH',
        price: 89,
        cost: 44,
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 90,
        minStockLevel: 35,
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
    },
    // Expanded Ingredients
    {
        id: 'ing5',
        code: 'ING-005',
        name: 'Ledový salát',
        category: 'INGREDIENT',
        price: 35,
        cost: 35,
        image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 200,
        minStockLevel: 50,
        unit: 'kg'
    },
    {
        id: 'ing6',
        code: 'ING-006',
        name: 'Kuřecí prsa',
        category: 'INGREDIENT',
        price: 160,
        cost: 160,
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 300,
        minStockLevel: 100,
        unit: 'kg'
    },
    {
        id: 'ing7',
        code: 'ING-007',
        name: 'Majonéza',
        category: 'INGREDIENT',
        price: 90,
        cost: 90,
        image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 150,
        minStockLevel: 40,
        unit: 'kg'
    },
    {
        id: 'ing8',
        code: 'ING-008',
        name: 'Okurka salátová',
        category: 'INGREDIENT',
        price: 40,
        cost: 40,
        image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=600&q=80',
        status: 'ACTIVE',
        stockLevel: 180,
        minStockLevel: 60,
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
    // Expanded Orders
    {
        id: 'ord-006',
        branchId: 'b2',
        branchName: 'BB Arkády Pankrác',
        createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
        status: 'NEW',
        items: [
            { productId: 'p8', productName: 'Bageta Sýrová', quantity: 40, price: 85 },
            { productId: 'p12', productName: 'Limonáda Citron', quantity: 60, price: 39 },
        ],
        totalPrice: 5740
    },
    {
        id: 'ord-007',
        branchId: 'b3',
        branchName: 'Výroba Žiželice',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
        status: 'APPROVED',
        items: [
            { productId: 'ing2', productName: 'Šunka výběrová', quantity: 50, price: 250 },
            { productId: 'ing3', productName: 'Sýr Eidam 30%', quantity: 40, price: 180 },
        ],
        totalPrice: 19700
    },
    {
        id: 'ord-008',
        branchId: 'b4',
        branchName: 'BB Letňany',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
        status: 'SHIPPED',
        items: [
            { productId: 'p10', productName: 'Panini Mozzarella', quantity: 30, price: 99 },
            { productId: 'p14', productName: 'Wrap Caesar', quantity: 25, price: 89 },
        ],
        totalPrice: 5195
    },
    {
        id: 'ord-009',
        branchId: 'b1',
        branchName: 'BB Václavské náměstí',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
        status: 'DELIVERED',
        items: [
            { productId: 'p11', productName: '360 Pizza Quattro Formaggi', quantity: 15, price: 199 },
        ],
        totalPrice: 2985
    },
    {
        id: 'ord-010',
        branchId: 'b2',
        branchName: 'BB Arkády Pankrác',
        createdAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
        status: 'NEW',
        items: [
            { productId: 'p9', productName: 'Sendvič Vajíčkový', quantity: 35, price: 69 },
            { productId: 'p13', productName: 'Bageta Kuřecí Strips', quantity: 20, price: 95 },
        ],
        totalPrice: 4315
    },
    {
        id: 'ord-011',
        branchId: 'b3',
        branchName: 'Výroba Žiželice',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
        status: 'APPROVED',
        items: [
            { productId: 'ing5', productName: 'Ledový salát', quantity: 100, price: 35 },
            { productId: 'ing6', productName: 'Kuřecí prsa', quantity: 50, price: 160 },
        ],
        totalPrice: 11500
    },
    {
        id: 'ord-012',
        branchId: 'b4',
        branchName: 'BB Letňany',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
        status: 'DELIVERED',
        items: [
            { productId: 'p1', productName: 'Bageta Šunková', quantity: 80, price: 89 },
            { productId: 'p7', productName: 'Ledový čaj Broskev', quantity: 80, price: 45 },
        ],
        totalPrice: 10720
    },
    {
        id: 'ord-013',
        branchId: 'b1',
        branchName: 'BB Václavské náměstí',
        createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
        status: 'NEW',
        items: [
            { productId: 'p5', productName: 'Bageta Debrecínská', quantity: 45, price: 92 },
        ],
        totalPrice: 4140
    },
    {
        id: 'ord-014',
        branchId: 'b2',
        branchName: 'BB Arkády Pankrác',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(),
        status: 'APPROVED',
        items: [
            { productId: 'p2', productName: 'Crocodille Sendvič', quantity: 60, price: 75 },
        ],
        totalPrice: 4500
    },
    {
        id: 'ord-015',
        branchId: 'b3',
        branchName: 'Výroba Žiželice',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
        status: 'SHIPPED',
        items: [
            { productId: 'ing7', productName: 'Majonéza', quantity: 20, price: 90 },
            { productId: 'ing8', productName: 'Okurka salátová', quantity: 30, price: 40 },
        ],
        totalPrice: 3000
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
    },
    // Expanded Tasks
    {
        id: 't5',
        productName: 'Bageta Sýrová',
        quantity: 120,
        unit: 'ks',
        priority: 'HIGH',
        startTime: '07:00',
        assignedTo: 'Petr S.',
        status: 'IN_PROGRESS'
    },
    {
        id: 't6',
        productName: 'Sendvič Vajíčkový',
        quantity: 90,
        unit: 'ks',
        priority: 'NORMAL',
        startTime: '09:00',
        status: 'PLANNED'
    },
    {
        id: 't7',
        productName: 'Panini Mozzarella',
        quantity: 150,
        unit: 'ks',
        priority: 'LOW',
        status: 'PLANNED'
    },
    {
        id: 't8',
        productName: '360 Pizza Quattro Formaggi',
        quantity: 60,
        unit: 'ks',
        priority: 'NORMAL',
        startTime: '11:00',
        status: 'COMPLETED'
    },
    {
        id: 't9',
        productName: 'Bageta Kuřecí Strips',
        quantity: 100,
        unit: 'ks',
        priority: 'HIGH',
        startTime: '06:30',
        assignedTo: 'Eva P.',
        status: 'IN_PROGRESS'
    },
    {
        id: 't10',
        productName: 'Wrap Caesar',
        quantity: 80,
        unit: 'ks',
        priority: 'NORMAL',
        startTime: '08:30',
        status: 'PLANNED'
    },
    {
        id: 't11',
        productName: 'Limonáda Citron',
        quantity: 300,
        unit: 'ks',
        priority: 'LOW',
        status: 'PLANNED'
    },
    {
        id: 't12',
        productName: 'Bageta Debrecínská',
        quantity: 110,
        unit: 'ks',
        priority: 'NORMAL',
        startTime: '10:30',
        status: 'COMPLETED'
    }
];

export const MOCK_ROUTES = [
    {
        id: 'r1',
        name: 'Trasa Praha-Sever',
        status: 'ON_ROAD',
        progress: 65,
        driver: 'Karel Novotný',
        vehicle: 'Mercedes Sprinter 4A2 3399',
        temperature: 3.5,
        stopsRemaining: 4,
        totalStops: 12,
        coordinates: { x: 45, y: 30 } // Mock coordinates for map
    },
    {
        id: 'r2',
        name: 'Trasa Brno-Město',
        status: 'DELIVERED',
        progress: 100,
        driver: 'Petr Rychlý',
        vehicle: 'Ford Transit 2B5 1122',
        temperature: 4.2,
        stopsRemaining: 0,
        totalStops: 8,
        coordinates: { x: 75, y: 60 }
    },
    {
        id: 'r3',
        name: 'Ranní závoz Pankrác',
        status: 'LOADING',
        progress: 15,
        driver: 'Jan Smutný',
        vehicle: 'Iveco Daily 5E3 9988',
        temperature: 5.1,
        stopsRemaining: 15,
        totalStops: 15,
        coordinates: { x: 20, y: 80 }
    },
    {
        id: 'r4',
        name: 'Noční závoz Crossdock Brno',
        status: 'ON_ROAD',
        progress: 40,
        driver: 'Milan Veselý',
        vehicle: 'Scania R450',
        temperature: 2.1,
        stopsRemaining: 2,
        totalStops: 3,
        coordinates: { x: 60, y: 20 }
    }
];

export const MOCK_RECIPES: Record<string, { layer: string; ingredient: string; amount: string; cost: number; supplier: string; allergens: string[] }[]> = {
    'p1': [ // Bageta Šunková
        { layer: 'Horní pečivo', ingredient: 'Bageta světlá 120g', amount: '60g', cost: 3.5, supplier: 'La Lorraine', allergens: ['1', '3', '7'] },
        { layer: 'Zelenina', ingredient: 'Ledový salát krájený', amount: '20g', cost: 2.0, supplier: 'Hortim', allergens: [] },
        { layer: 'Hlavní surovina', ingredient: 'Šunka výběrová', amount: '40g', cost: 8.5, supplier: 'Le & Co', allergens: [] },
        { layer: 'Spodní mazání', ingredient: 'Dresink Caesar', amount: '15g', cost: 3.0, supplier: 'Spak', allergens: ['3', '7', '10'] },
        { layer: 'Spodní pečivo', ingredient: 'Bageta světlá 120g', amount: '60g', cost: 3.5, supplier: 'La Lorraine', allergens: ['1', '3', '7'] },
    ],
    'p3': [ // Panini s kuřecím
        { layer: 'Horní pečivo', ingredient: 'Panini pečivo', amount: '55g', cost: 4.0, supplier: 'La Lorraine', allergens: ['1'] },
        { layer: 'Hlavní surovina', ingredient: 'Kuřecí prsa pečená', amount: '50g', cost: 12.0, supplier: 'Vodňanské kuře', allergens: [] },
        { layer: 'Doplněk', ingredient: 'Sýr Mozzarella', amount: '20g', cost: 5.0, supplier: 'Madeta', allergens: ['7'] },
        { layer: 'Spodní mazání', ingredient: 'Pesto Genovese', amount: '10g', cost: 4.5, supplier: 'Panzani', allergens: ['5', '7', '8'] },
        { layer: 'Spodní pečivo', ingredient: 'Panini pečivo', amount: '55g', cost: 4.0, supplier: 'La Lorraine', allergens: ['1'] },
    ]
};

export const WASTE_REASONS = [
    { id: 'exp', label: 'Expirace', color: 'bg-red-100 text-red-700' },
    { id: 'dmg', label: 'Poškozeno při výrobě', color: 'bg-orange-100 text-orange-700' },
    { id: 'fall', label: 'Spadlo na zem', color: 'bg-yellow-100 text-yellow-700' },
    { id: 'quality', label: 'Nekvalitní surovina', color: 'bg-slate-100 text-slate-700' },
];
