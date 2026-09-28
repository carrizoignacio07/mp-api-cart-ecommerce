import React from 'react';

export const Footer = () => {
    return (
        <footer className="p-5 bg-blue-400 flex justify-center">
            <p>© {new Date().getFullYear()} Copyright. Todos los derechos reservados.</p>
        </footer>
    );
};
