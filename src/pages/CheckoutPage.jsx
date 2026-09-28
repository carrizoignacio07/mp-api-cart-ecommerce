import { useContext } from 'react';
import { Card } from '../components/Card';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

export const CheckoutPage = () => {
    const { productos } = useContext(ProductContext);

    const { agregarCompra, eliminarCompra } = useContext(CartContext);

    const handleAgregar = (compra) => {
        agregarCompra(compra);
    };
    const handleQuitar = (id) => {
        eliminarCompra(id);
    };

    return (
        <>
            <h1>Compras: </h1>
            <hr />

            {productos.map((producto) => (
                <Card
                    key={producto.id}
                    imagen={producto.image}
                    titulo={producto.title}
                    descripcion={producto.description}
                    precio={producto.price}
                    handleAgregar={() => handleAgregar(producto)}
                    handleQuitar={() => handleQuitar(producto.id)}
                ></Card>
            ))}
        </>
    );
};
