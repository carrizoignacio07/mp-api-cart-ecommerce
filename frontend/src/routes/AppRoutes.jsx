import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { AuthLayout } from '../pages/AuthLayout';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
