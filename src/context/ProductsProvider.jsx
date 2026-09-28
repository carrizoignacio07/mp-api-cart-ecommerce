import { useEffect, useState } from 'react';
import { ProductContext } from './ProductContext';

export const ProductsProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    const fetchProductos = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProductos(data.products);
    };

    useEffect(() => {
        fetchProductos();
    }, []);

    return (
        <ProductContext.Provider value={{ productos }}>
            {children}
        </ProductContext.Provider>
    );
};
