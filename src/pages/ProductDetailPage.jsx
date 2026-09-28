import { useState, useEffect } from 'react';
import { fetchProducts } from './../helpers/fetchProducts';

export const ProductDetailPage = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState(false);
    useEffect(() => {
        fetchProducts(setLoading, setProducts);
    }, []);
    console.log(products);
    return (
        <>
            <h1>{products[id].title}</h1>
            <p>{products[id].description}</p>
            {products[id].reviews.map((el) => {
                <li>{el}</li>;
            })}
        </>
    );
};
