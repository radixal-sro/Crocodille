import type { Product, Order, User, InventoryItem } from '../types';

export const MOCK_USERS: User[] = [
    { id: 'u1', name: 'Jan Novák', role: 'CEO', avatar: 'https://i.pravatar.cc/150?u=u1' },
    { id: 'u2', name: 'Petr Svoboda', role: 'MANAGER', branchId: 'b1', avatar: 'https://i.pravatar.cc/150?u=u2' },
    { id: 'u3', name: 'Jana Dvořáková', role: 'WAREHOUSE', branchId: 'b2', avatar: 'https://i.pravatar.cc/150?u=u3' },
];

export const MOCK_PRODUCTS: Product[] = [
    {
        id: 'p1',
        code: 'BAG-001',
        name: 'Bageta Šunková',
        category: 'BAGUETTE',
        price: 89,
        cost: 45,
        image: 'https://images.unsplash.com/photo-1550507992-eb63eea4332f?auto=format&fit=crop&w=600&q=80',
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
        ],
        totalPrice: 6700
    },
    {
        id: 'ord-002',
        branchId: 'b2',
        branchName: 'BB Arkády Pankrác',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        status: 'APPROVED',
        items: [
            { productId: 'p4', productName: '360 Pizza Salami', quantity: 20, price: 189 },
        ],
        totalPrice: 3780
    },
    {
        id: 'ord-003',
        branchId: 'b3',
        branchName: 'Výroba Žiželice',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
        status: 'SHIPPED',
        items: [
            { productId: 'ing1', productName: 'Mouka pšeničná hladká', quantity: 1000, price: 15 },
        ],
        totalPrice: 15000
    }
];
