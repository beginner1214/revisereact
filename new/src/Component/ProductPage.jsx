import heroImg from "../assets/hero.png";
import { useDispatch } from "react-redux";
import { addItem } from "../Services/slice.jsx";

const products = [
  {
    id: 1,
    name: "Classic Sneakers",
    price: 2499,
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Minimal Backpack",
    price: 1799,
    tag: "New",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 3999,
    tag: "Hot",
  },
  {
    id: 4,
    name: "Everyday Watch",
    price: 2999,
    tag: "Trending",
  },
  {
    id: 5,
    name: "Cotton Hoodie",
    price: 1999,
    tag: "Soft",
  },
  {
    id: 6,
    name: "Stainless Bottle",
    price: 899,
    tag: "Eco",
  },
];

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProductPage() {
  const dispatch = useDispatch();

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-text">
          <h1>Simple Product Page</h1>
          <p>Browse a few items and add them to your cart.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" type="button">
              Shop now
            </button>
            <button className="btn btn-ghost" type="button">
              View deals
            </button>
          </div>
        </div>
        <img className="hero-img" src={heroImg} alt="Shop hero" />
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Products</h2>
          <p className="muted">A small list to get you started.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-top">
                <span className="tag">{product.tag}</span>
              </div>
              <div className="product-body">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-row">
                  <span className="price">{formatINR(product.price)}</span>
                  <span className="muted">In stock</span>
                </div>
                <button
                  className="btn btn-primary product-btn"
                  type="button"
                  onClick={() => dispatch(addItem())}
                >
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
