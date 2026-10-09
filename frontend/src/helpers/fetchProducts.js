export const fetchProducts = async (setLoading, setProducts) => {
    setLoading(true);
    try {
        const response = await fetch(`https://dummyjson.com/products`);
        const data = await response.json();
        console.log(data.products);
        setProducts(data.products);
    } catch (error) {
        console.error('Error fetching products:', error);
    } finally {
        setLoading(false);
    }
};

// const calculateTotal = (price, quantity, discount) =>
//     price * quantity - discount;
