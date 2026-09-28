import { useReducer } from 'react';
import { CartContext } from './CartContext';

const initialState = [];

export const CartProvider = ({ children }) => {
    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Agregar Compra': {
                const existe = state.find((item) => item.id === action.payload.id);

                if (existe) {
                    return state.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, cantidad: item.cantidad + 1 }
                            : item
                    );
                }

                return [...state, { ...action.payload, cantidad: 1 }];
            }

            case '[CARRITO] Aumentar Cantidad Compra':
                return state.map((item) =>
                    item.id === action.payload ? { ...item, cantidad: item.cantidad + 1 } : item
                );

            case '[CARRITO] Disminuir Cantidad Compra':
                return state.map((item) =>
                    item.id === action.payload && item.cantidad > 1
                        ? { ...item, cantidad: item.cantidad - 1 }
                        : item
                );

            case '[CARRITO] Quitar Compra':
                return state
                    .map((item) =>
                        item.id === action.payload ? { ...item, cantidad: item.cantidad - 1 } : item
                    )
                    .filter((item) => item.cantidad > 0);

            case '[CARRITO] Eliminar Compra':
                return state.filter((item) => item.id !== action.payload);

            default:
                return state;
        }
    };

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    const agregarCompra = (compra) => {
        dispatch({
            type: '[CARRITO] Agregar Compra',
            payload: compra,
        });
    };
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad Compra',
            payload: id,
        };
        dispatch(action);
    };
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad Compra',
            payload: id,
        };
        dispatch(action);
    };
    const eliminarCompra = (id) => {
        dispatch({
            type: '[CARRITO] Eliminar Compra',
            payload: id,
        });
    };
    const quitarCompra = (id) => {
        dispatch({
            type: '[CARRITO] Quitar Compra',
            payload: id,
        });
    };

    return (
        <CartContext.Provider
            value={{
                listaCompras,
                agregarCompra,
                aumentarCantidad,
                disminuirCantidad,
                eliminarCompra,
                quitarCompra,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
