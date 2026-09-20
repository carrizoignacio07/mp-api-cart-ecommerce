export const Header = () => {
    return (
        <header className="p-5 flex flex-row justify-end bg-teal-100 w-full h-24">
            <ul className="w-fit flex justify-evenly">
                <a className="p-0 m-0" href='#'><li className="p-3 dark:md:hover:bg-blue-200 rounded-xl">Home</li></a>
                <a className="p-0 m-0" href='#'><li className="p-3 dark:md:hover:bg-blue-200 rounded-xl">Products</li></a>
                <a className="p-0 m-0" href='#'><li className="p-3 dark:md:hover:bg-blue-200 rounded-xl">Contact</li></a>
                <a className="p-0 m-0" href='#'><li className="p-3 dark:md:hover:bg-blue-200 rounded-xl">About us</li></a>
                <a className="p-0 m-0" href='#'><li className="p-3 dark:md:hover:bg-blue-200 rounded-xl">Login</li></a>
            </ul>
        </header>
    )
}