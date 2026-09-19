import axios from 'axios';
import 'dotenv/config'

const URL_PREFERENCES = `https://api.mercadopago.com/checkout/preferences`;
const URL_PAYMENT = `https://api.mercadopago.com/checkout/preferences`;

const cart = {
    "items": [
        {
            "id": "Sound system",
            "title": "Dummy Title",
            "description": "Dummy description",
            "picture_url": "https://www.myapp.com/myimage.jpg",
            "category_id": "car_electronics",
            "quantity": 1,
            "currency_id": "ARS",
            "unit_price": 24.5
        }
    ]
};


try {
    const response = await axios.post(URL_PAYMENT, cart, {
        headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` }
    });
    console.log(response.data);
} catch (error) {
    console.log(error);
}
