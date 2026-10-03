import { useState, useContext } from 'react';

import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

import { IoAdd } from 'react-icons/io5';
import { IoIosRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const ProductsPage = () => {
    const [loading, setLoading] = useState(false);
    const { products } = useContext(ProductContext);
    const { agregarCompra, quitarCompra } = useContext(CartContext);

    const handleAgregar = (compra) => {
        agregarCompra(compra);
    };
    const handleQuitar = (id) => {
        quitarCompra(id);
    };
    return (
        <section className="p-7 grid grid-cols-3 gap-5 ">
            {loading && (
                <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/windows/32/spinner-frame-2.png"
                    alt="spinner-frame-2"
                />
            )}
            {!loading &&
                products.map((product) => (
                    <article
                        className="p-5 max-w-96 max-h-100px bg-sky-100 flex flex-col justify-center items-center"
                        key={product.id}
                    >
                        <h2 className="text-2xl font-medium">{product.title}</h2>
                        <p className="m-3">
                            {product.description.length > 100
                                ? product.description.slice(0, 100).concat('...')
                                : product.description}
                        </p>
                        <img
                            className="max-h-70 object-scale-down m-auto"
                            src={product.images[0]}
                            alt={product.title}
                        />
                        <h4 className="text-l font-medium">${product.price}</h4>
                        <div className="lg:w-fit wrap-anywhere flex justify-center items-center">
                            <button
                                className="p-3 m-3 max-w-fit bg-blue-400 text-white rounded cursor-pointer hover:bg-red-500"
                                onClick={() => handleQuitar(product.id)}
                            >
                                <IoIosRemove />
                            </button>
                            <Link
                                to={`/products/${product.id}`}
                                className="p-3 m-3 max-w-fit bg-blue-400 text-white rounded cursor-pointer hover:bg-blue-600"
                            >
                                More
                            </Link>
                            <button
                                className="p-3 m-3 max-w-fit bg-blue-400 text-white rounded cursor-pointer hover:bg-green-500"
                                onClick={() => handleAgregar(product)}
                            >
                                <IoAdd />
                            </button>
                        </div>
                    </article>
                ))}
        </section>
    );
};
