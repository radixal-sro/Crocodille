import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

import { CartProvider } from './context/CartContext';
import Dashboard from './pages/Dashboard';
import Catalog from './pages/Catalog';
import Orders from './pages/Orders';
import Inventory from './pages/Inventory';
import Production from './pages/Production';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="catalog" element={<Catalog />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="inventory" element={<Inventory />} />
                        <Route path="production" element={<Production />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
