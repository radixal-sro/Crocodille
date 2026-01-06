import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { CartProvider } from './context/CartContext';

import Dashboard from './pages/Dashboard';
import Catalog from './pages/Catalog';
import Orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';
import Inventory from './pages/Inventory';
import Production from './pages/Production';
import { Logistics } from './pages/Logistics';
import Users from './pages/Users';
import { ProductDetail } from './pages/ProductDetail';
import { WasteControl } from './pages/WasteControl';

function App() {
    return (
        <CartProvider>
            <BrowserRouter basename="/crocodille-erp">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="catalog" element={<Catalog />} />
                        <Route path="products/:id" element={<ProductDetail />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="orders/:orderId" element={<OrderDetail />} />
                        <Route path="inventory" element={<Inventory />} />
                        <Route path="production" element={<Production />} />
                        <Route path="waste-control" element={<WasteControl />} />
                        <Route path="logistics" element={<Logistics />} />
                        <Route path="users" element={<Users />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
