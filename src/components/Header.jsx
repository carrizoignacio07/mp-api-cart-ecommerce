import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="p-5 w-full bg-teal-100 h-24">
            <nav className="p-3 flex flex-row justify-end gap-5">
                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/">
                    Home
                </NavLink>
                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/about">
                    Nosotros
                </NavLink>
                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/contact">
                    Contacto
                </NavLink>
                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/cart">
                    Carrito
                </NavLink>
                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/login">
                    Iniciar sesión
                </NavLink>
            </nav>
        </header>
    );
};
