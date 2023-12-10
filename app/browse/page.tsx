/* eslint-disable @next/next/no-img-element */
import ProductCard from "@/components/ProductCard";
import React from "react";

const BrowsePage = () => {
  const products = [
    { id: 1, name: "Product 1", price: 10.99, image: "/images/product1.jpg" },
    { id: 2, name: "Product 2", price: 19.99, image: "/images/product2.jpg" },
    { id: 3, name: "Product 3", price: 14.99, image: "/images/product3.jpg" },
    // Add more products here
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-8">Browse Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
     
    </div>
  );
};

export default BrowsePage;
