export interface User {
    id: string;
    name: string;
    role: 'CEO' | 'MANAGER' | 'WAREHOUSE' | 'PRODUCTION' | 'LOGISTICS';
    avatar?: string;
    branchId?: string;
}

export interface Product {
    id: string;
    code: string;
    name: string;
    category: 'BAGUETTE' | 'SANDWICH' | 'PIZZA' | 'INGREDIENT' | 'DRINK';
    price: number;
    cost: number;
    image: string;
    status: 'ACTIVE' | 'INACTIVE';
    stockLevel: number;
    minStockLevel: number;
    unit: string;
    ingredients?: {
        ingredientId: string;
        amount: number;
        unit: string;
    }[];
}

export interface Order {
    id: string;
    branchId: string;
    branchName: string;
    createdAt: string;
    status: 'NEW' | 'APPROVED' | 'SHIPPED' | 'DELIVERED';
    items: {
        productId: string;
        productName: string;
        quantity: number;
        price: number;
    }[];
    totalPrice: number;
}

export interface InventoryItem {
    id: string;
    productId: string;
    productName: string;
    quantity: number;
    reserved: number;
    incoming: number;
    location: string;
    lastUpdated: string;
}

export interface KPI {
    label: string;
    value: string | number;
    change: number; // percentage
    trend: 'UP' | 'DOWN' | 'NEUTRAL';
    period: string;
}

export interface ProductionTask {
    id: string;
    productName: string;
    quantity: number;
    unit: string;
    priority: 'HIGH' | 'NORMAL' | 'LOW';
    startTime?: string;
    assignedTo?: string;
    status: 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED';
}
