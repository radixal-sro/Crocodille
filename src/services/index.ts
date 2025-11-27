import type { Product, Order } from '../types';
import { MOCK_PRODUCTS, MOCK_ORDERS } from './mockData';

const DELAY = 500; // Simulate network latency

export const ProductService = {
    getAll: async (): Promise<Product[]> => {
        await new Promise(resolve => setTimeout(resolve, DELAY));
        return [...MOCK_PRODUCTS];
    },

    getById: async (id: string): Promise<Product | undefined> => {
        await new Promise(resolve => setTimeout(resolve, DELAY));
        return MOCK_PRODUCTS.find(p => p.id === id);
    }
};

export const OrderService = {
    getAll: async (): Promise<Order[]> => {
        await new Promise(resolve => setTimeout(resolve, DELAY));
        return [...MOCK_ORDERS];
    },

    create: async (order: Omit<Order, 'id' | 'createdAt' | 'status'>): Promise<Order> => {
        await new Promise(resolve => setTimeout(resolve, DELAY));
        const newOrder: Order = {
            ...order,
            id: `ord-${Date.now()}`,
            createdAt: new Date().toISOString(),
            status: 'NEW'
        };
        MOCK_ORDERS.unshift(newOrder); // Add to beginning
        return newOrder;
    }
};
