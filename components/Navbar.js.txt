import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Catalog</Link>
      <Link href="/order">Place Order</Link>
      <Link href="/track">Track Order</Link>
    </nav>
  );
}
