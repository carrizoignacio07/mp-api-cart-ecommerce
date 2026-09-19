import React from 'react'

export const Header = () => {
    return (
        <header className="p-5 bg-teal-100 w-full h-fit">
            <ul className="w-48 p-5 flex justify-evenly top-0 right-0">
                <a href='#'><li className="m-3">Home</li></a>
                <a href='#'><li className="m-3">Products</li></a>
                <a href='#'><li className="m-3">Contact</li></a>
            </ul>
        </header>
    )
}
