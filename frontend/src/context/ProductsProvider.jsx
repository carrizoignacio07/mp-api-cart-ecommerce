import { useEffect, useState } from 'react';
import { ProductContext } from './ProductContext';

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const fetchProductos = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
    };

    useEffect(() => {
        fetchProductos();
    }, []);

    return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};
