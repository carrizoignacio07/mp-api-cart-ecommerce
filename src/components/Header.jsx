import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Header = () => {
    const { listaCompras } = useContext(CartContext);

    const cantidadProductos = listaCompras.reduce((total, item) => total + item.cantidad, 0);

    return (
        <header className="p-3 w-full bg-teal-100 h-24 sticky flex flex-row justify-between items-center">
            <h1 className="text-2xl font-medium px-3">Fake Store</h1>
            <nav className="p-3 flex flex-row justify-end gap-5">
                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/">
                    Home
                </NavLink>

                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/about">
                    About Us
                </NavLink>

                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/contact">
                    Contact
                </NavLink>

                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/login">
                    Login
                </NavLink>

                <NavLink className="p-2 rounded-full hover:bg-teal-200 relative" to="/cart">
                    <FaShoppingCart />

                    {cantidadProductos > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {cantidadProductos}
                        </span>
                    )}
                </NavLink>
            </nav>
        </header>
    );
};
