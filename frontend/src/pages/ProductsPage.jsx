import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Card } from '../components/Card';

export const ProductsPage = () => {
    const { products } = useContext(ProductContext);

    return (
        <section className="p-7 grid grid-cols-3 gap-5">
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </section>
    );
};
