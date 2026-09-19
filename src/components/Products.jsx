import React, { useEffect, useState } from 'react'
// Helpers
import { fetchProducts } from '../helpers/fetchProducts'

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProducts(setLoading, setProducts);
    }, []);

    return (
        <section className="p-7 grid grid-cols-3 gap-3 ">
            {loading && <img width="32" height="32" src="https://img.icons8.com/windows/32/spinner-frame-2.png" alt="spinner-frame-2" />}
            {!loading && products.map(product => (
                <article className="p-5 max-w-96 max-h-100px bg-sky-100" key={product.id}>
                    <h2 className="text-xl font-medium">{product.title}</h2>
                    <p className="m-3">{product.description}</p>
                    <img className="max-h-70 object-scale-down m-auto" src={product.image} alt={product.title} />
                    <h4 className="text-l font-medium">{product.price}</h4>
                    <button className="p-3 m-3 bg-blue-500 text-white rounded cursor-pointer" onClick={() => window.open(product.image, '_blank')}>View Image</button>
                </article>
            ))}
        </section>
    );
}