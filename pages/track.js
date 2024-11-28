import axios from 'axios';

export default function TrackOrder() {
    const [order, setOrder] = useState(null);

    const handleTrack = async (e) => {
        e.preventDefault();
        const orderId = e.target.orderId.value;

        const res = await axios.get(`/api/orders/${orderId}`);
        setOrder(res.data);
    };

    return (
        <div>
            <form onSubmit={handleTrack}>
                <input name="orderId" placeholder="Order ID" required />
                <button type="submit">Track Order</button>
            </form>
            {order && <pre>{JSON.stringify(order, null, 2)}</pre>}
        </div>
    );
}
