import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);
    if (!product) {
        return <p>Cargando...</p>;
    }
    return (
        <section className="m-5 flex flex-col justify-center content-center">
            <h1 className="text-3xl">{product.title}</h1>
            <p className="text-1xl">Description: {product.description}</p>
            <p className="text-1xl">Category: {product.category}</p>
            <p className="text-1xl">Discount: {product.discountPercentage}</p>
            <p className="text-1xl">Rating: {product.rating}</p>
            <p className="text-1xl">Stock: {product.stock}</p>
            <p className="text-1xl">Brand: {product.brand}</p>
            <section className="bg-blue-300 p-3 m-3 w-fit flex flex-row justify-center gap-2">
                {product.reviews.map((el) => (
                    <div className="bg-blue-200 p-3 m-3 w-fit flex flex-col justify-center gap-2">
                        <p className="text-1xl text-center font-medium">{el.reviewerName}</p>
                        <p>{el.comment}</p>
                        <p>{el.rating}</p>
                        <p>{el.date}</p>
                    </div>
                ))}
            </section>
        </section>
    );
};
