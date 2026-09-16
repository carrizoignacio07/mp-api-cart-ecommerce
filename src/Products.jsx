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
    <>
      <h1>Products</h1>
      <ul>
        {loading && <img width="32" height="32" src="https://img.icons8.com/windows/32/spinner-frame-2.png" alt="spinner-frame-2"/>}
        {!loading && products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <button onClick={() => window.open(product.image, '_blank')}>View Image</button>
            <h4>{product.price}</h4>
          </li>
        ))}
      </ul>
    </>
  );
}