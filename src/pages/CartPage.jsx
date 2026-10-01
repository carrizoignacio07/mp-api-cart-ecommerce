import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const CartPage = () => {
    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } =
        useContext(CartContext);

    const calcularTotal = () => {
        return listaCompras
            .reduce((total, item) => total + item.price * item.cantidad, 0)
            .toFixed(2);
    };

    const handleImpresion = () => {
        window.print();
    };

    return (
        <section className="mt-1 mx-5 px-7 min-h-100 flex flex-col justify-center content-center">
            <table className="w-full table-auto">
                <thead>
                    <tr className="border-b">
                        <th className="p-3 text-left">Nombre</th>
                        <th className="p-3 text-center">Precio</th>
                        <th className="p-3 text-center">Cantidad</th>
                        <th className="p-3 text-center">Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {listaCompras.map((item) => (
                        <tr key={item.id} className="border-b">
                            <td className="p-3">{item.title}</td>

                            <td className="p-3 text-center">${item.price}</td>

                            <td className="p-3 text-center">
                                <div className="flex justify-center items-center gap-2">
                                    <button
                                        className="p-2 bg-teal-100 rounded-full cursor-pointer hover:bg-teal-200"
                                        onClick={() => disminuirCantidad(item.id)}
                                    >
                                        -
                                    </button>

                                    <span className="px-3">{item.cantidad}</span>

                                    <button
                                        className="p-2 bg-teal-100 rounded-full cursor-pointer hover:bg-teal-200"
                                        onClick={() => aumentarCantidad(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                            </td>

                            <td className="p-3 text-center">
                                <button
                                    type="button"
                                    className="p-2 bg-red-500 rounded-full cursor-pointer hover:bg-red-600"
                                    onClick={() => eliminarCompra(item.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <th colSpan="3" className="p-3 text-right">
                            TOTAL:
                        </th>
                        <td className="p-3 text-center">${calcularTotal()}</td>
                    </tr>
                </tfoot>
            </table>

            <button
                className="p-3 w-50 h-15px bg-green-300 rounded-2xl cursor-pointer hover:bg-green-400 self-center"
                onClick={handleImpresion}
                disabled={listaCompras.length < 1}
            >
                Buy
            </button>
        </section>
    );
};
