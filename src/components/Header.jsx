import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="p-5 w-full bg-teal-100 h-24">
            <nav className="p-3 flex flex-row justify-end gap-5">
                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/">
                    Home
                </NavLink>
                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/products">
                    Products
                </NavLink>
                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/about">
                    About Us
                </NavLink>
                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/contact">
                    Contact
                </NavLink>
                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/cart">
                    Cart
                </NavLink>
                <NavLink className="p-2 rounded-full hover:bg-teal-200" to="/login">
                    Login
                </NavLink>
            </nav>
        </header>
    );
};
