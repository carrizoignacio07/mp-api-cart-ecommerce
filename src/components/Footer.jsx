import React from 'react';

export const Footer = () => {
    return (
        <footer className="p-5 bg-blue-400 relative bottom-0 left-0 w-full">
            <p className="text-center">
                © {new Date().getFullYear()} Copyright. Todos los derechos reservados.
            </p>
        </footer>
    );
};
