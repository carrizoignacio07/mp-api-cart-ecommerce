import { useEffect, useState } from 'react';
import './App.css'

export const Products = () => {
  const [products, setProducts] =  useState([]);
  const [loading, setLoading] =  useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data)
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="p-5 bg-slate-50">
      <h1 className="text-2xl font-semibold">Products</h1>
      <section className="p-5 grid grid-cols-3 gap-3">
        {loading && <img width="32" height="32" src="https://img.icons8.com/windows/32/spinner-frame-2.png" alt="spinner-frame-2"/>}
        {!loading && products.map(product => (
          <article className="p-5 max-w-96 bg-sky-100" key={product.id}>
            <h2 className="text-xl font-medium">{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <button className="p-2 bg-blue-500 text-white rounded cursor-pointer" onClick={() => window.open(product.image, '_blank')}>View Image</button>
            <h4>{product.price}</h4>
          </article>
        ))}
      </section>
    </div>
  );
}