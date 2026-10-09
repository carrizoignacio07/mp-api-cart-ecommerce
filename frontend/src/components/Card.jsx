import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoAdd } from 'react-icons/io5';
import { IoIosRemove } from 'react-icons/io';
import { CartContext } from '../context/CartContext';

export const Card = ({ product }) => {
    const { agregarCompra, quitarCompra } = useContext(CartContext);
    const { id, title, description, images, price } = product;

    return (
        <article className="p-5 max-w-96 bg-sky-100 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-medium">{title}</h2>
            <p className="m-3">
                {description.length > 100 ? description.slice(0, 100).concat('...') : description}
            </p>
            <img className="max-h-70 object-scale-down m-auto" src={images[0]} alt={title} />
            <h4 className="text-l font-medium">${price}</h4>
            <div className="lg:w-fit wrap-anywhere flex justify-center items-center">
                <button
                    type="button"
                    aria-label={`Quitar ${title} del carrito`}
                    className="p-3 m-3 max-w-fit bg-blue-400 text-white rounded cursor-pointer hover:bg-red-500"
                    onClick={() => quitarCompra(id)}
                >
                    <IoIosRemove />
                </button>
                <Link
                    to={`/products/${id}`}
                    className="p-3 m-3 max-w-fit bg-blue-400 text-white rounded cursor-pointer hover:bg-blue-600"
                >
                    View
                </Link>
                <button
                    type="button"
                    aria-label={`Agregar ${title} al carrito`}
                    className="p-3 m-3 max-w-fit bg-blue-400 text-white rounded cursor-pointer hover:bg-green-500"
                    onClick={() => agregarCompra(product)}
                >
                    <IoAdd />
                </button>
            </div>
        </article>
    );
};
