export const ContactForm = () => {
    return (
        <form className="m-5 p-5 w-1/3 h-2/3 flex flex-col gap-4 justify-center items-center border border-gray-300 rounded">
            <input
                type="text"
                placeholder="Ignacio"
                className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
                type="email"
                placeholder="carrizoignacio96@gmail.com"
                className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <textarea
                placeholder="I want to get in touch with you."
                className="w-1/2 p-2 border border-gray-300 rounded"
            ></textarea>
            <button
                type="submit"
                className="w-fit bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
            >
                Send
            </button>
        </form>
    );
};
