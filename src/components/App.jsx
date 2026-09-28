// Styles
import './../styles/App.css';
// Libraries
import { Route, Routes } from 'react-router';
// Componentes
import { Header } from './Header';
import { Products } from './Products';
import { Footer } from './Footer';
// Pages
import { CheckoutPage } from './../pages/CheckoutPage';
import { CartPage } from './../pages/CartPage';
import { AboutPage } from './../pages/AboutPage';
import { ContactPage } from './../pages/ContactPage';
import { HomePage } from './../pages/HomePage';
import { LoginPage } from './../pages/LoginPage';
// Providers
import { ProductsProvider } from './../context/ProductsProvider';
import { CartProvider } from './../context/CartProvider';

export const App = () => {
    return (
        <>
            <ProductsProvider>
                <CartProvider>
                    <Header />
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/checkout" element={<CheckoutPage />}></Route>
                        <Route path="/cart" element={<CartPage />}></Route>
                        <Route path="/login" element={<LoginPage />}></Route>
                    </Routes>
                    <Footer />
                </CartProvider>
            </ProductsProvider>
        </>
    );
};
