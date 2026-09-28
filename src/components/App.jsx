// Libraries

// Styles
import './../styles/App.css';
// Componentes
import { Header } from './Header';
import { Footer } from './Footer';
import { AppRoutes } from './../routes/AppRoutes';
// Providers
import { ProductsProvider } from './../context/ProductsProvider';
import { CartProvider } from './../context/CartProvider';

export const App = () => {
    return (
        <>
            <ProductsProvider>
                <CartProvider>
                    <Header />
                    <main>
                        <AppRoutes />
                    </main>
                    <Footer />
                </CartProvider>
            </ProductsProvider>
        </>
    );
};
