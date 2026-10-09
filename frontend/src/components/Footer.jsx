import React from 'react';

export const Footer = () => {
    return (
        <footer className="p-5 bg-blue-400 w-full flex flex-col justify-end items-center gap-2">
            <p className="text-center">
                © {new Date().getFullYear()} Copyright. Todos los derechos reservados.
            </p>
        </footer>
    );
};
