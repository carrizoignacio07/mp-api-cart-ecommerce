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
        print();
    };

    return (
        <section className="p-7 flex flex-row justify-around">
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaCompras.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>
                                <button
                                    className="p-2 bg-teal-100 rounded-full cursor-pointer hover:bg-teal-200"
                                    onClick={() => disminuirCantidad(item.id)}
                                >
                                    -
                                </button>
                                <button className="btn btn-primary">{item.cantidad}</button>
                                <button
                                    className="p-2 bg-teal-100 rounded-full cursor-pointer hover:bg-teal-200"
                                    onClick={() => aumentarCantidad(item.id)}
                                >
                                    +
                                </button>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="p-2 bg-red-500 rounded-full cursor-pointer hover:bg-red-500"
                                    onClick={() => eliminarCompra(item.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <th>
                            <b>TOTAL: </b>
                        </th>
                        <td></td>
                        <td></td>
                        <td>${calcularTotal()}</td>
                    </tr>
                </tbody>
            </table>

            <button
                className="p-2 bg-teal-100 rounded-full cursor-pointer hover:bg-teal-200"
                onClick={handleImpresion}
                disabled={listaCompras < 1}
            >
                COMPRAR
            </button>
        </section>
    );
};
