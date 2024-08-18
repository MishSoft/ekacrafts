"use client";
import { useEffect, useState } from "react";

interface Product {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/products/${params.id}`);
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [params.id]);

  if (!product) return <p>Loading...</p>;

  return (
    <section>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.imageUrl} alt={product.name} />
    </section>
  );
}
