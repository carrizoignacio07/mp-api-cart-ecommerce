export const fetchProducts = async (setLoading, setProducts) => {
    setLoading(true);
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data)
        setProducts(data);
    } catch (error) {
        console.error('Error fetching products:', error);
    } finally {
        setLoading(false);
    }
}