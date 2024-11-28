import axios from 'axios';

export default function Order() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        await axios.post('/api/orders', data);
        alert('Order placed successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="product_id" placeholder="Product ID" required />
            <input name="quantity" placeholder="Quantity" required />
            <input name="customer_name" placeholder="Name" required />
            <input name="contact_info" placeholder="Contact Info" required />
            <textarea name="delivery_address" placeholder="Address" required></textarea>
            <button type="submit">Place Order</button>
        </form>
    );
}
