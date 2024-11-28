import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AdminPage() {
  const { data: session } = useSession();
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  useEffect(() => {
    if (session?.user.role === "admin") {
      fetch("/api/orders").then((res) => res.json()).then(setOrders);
      fetch("/api/products").then((res) => res.json()).then(setProducts);
    }
  }, [session]);

  const handleProductAdd = async () => {
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    alert("Product added!");
    setNewProduct({ name: "", price: "" });
    fetch("/api/products").then((res) => res.json()).then(setProducts);
  };

  const handleOrderStatusUpdate = async (orderId, status) => {
    await fetch(`/api/orders/${orderId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    alert("Order status updated!");
    fetch("/api/orders").then((res) => res.json()).then(setOrders);
  };

  if (!session) {
    return <button onClick={() => signIn()}>Sign In as Admin</button>;
  }

  if (session?.user.role !== "admin") {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={signOut}>Sign Out</button>

      <h2>Manage Products</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
      />
      <button onClick={handleProductAdd}>Add Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - ${product.price.toFixed(2)}</li>
        ))}
      </ul>

      <h2>Manage Orders</h2>
      {orders.map((order) => (
        <div key={order.id}>
          <p>
            Order #{order.id} - {order.buyerName} - Status: {order.status}
          </p>
          <button onClick={() => handleOrderStatusUpdate(order.id, "In Progress")}>
            Mark In Progress
          </button>
          <button onClick={() => handleOrderStatusUpdate(order.id, "Delivered")}>
            Mark Delivered
          </button>
        </div>
      ))}
    </div>
  );
}
