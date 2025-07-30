import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import './Productpage.css';


export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/videos/")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className= "first"style={{ padding: "2rem", backgroundColor: "black", padding: "0.5rem", }}>
      <h1 className="sec">Portfolio</h1>
      <p className="3">Welcome! Here you can explore a selection of my best video projects — each crafted with passion, creativity, and attention to detail. Every video tells a unique story through the lens.</p>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}