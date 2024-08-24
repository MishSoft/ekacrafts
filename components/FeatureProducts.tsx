import React from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Handmade Necklace",
    price: "$35.00",
    imageUrl: "https://i.redd.it/a7804bhs5iea1.jpg", // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Woolen Scarf",
    price: "$25.00",
    imageUrl:
      "https://preview.redd.it/the-one-on-the-left-was-my-first-one-still-working-on-the-v0-bygf3it92tid1.jpeg?width=1080&crop=smart&auto=webp&s=271b7135ea5b279377443910dea3d05c7da13803",
  },
  {
    id: 3,
    name: "Ceramic Mug",
    price: "$20.00",
    imageUrl:
      "https://preview.redd.it/my-second-project-at-work-nursing-home-this-time-i-asked-v0-eqs5clo60fid1.jpeg?width=1080&crop=smart&auto=webp&s=f2b180140c850cb2990b7e306e768f08fc4a2eaf",
  },
  {
    id: 4,
    name: "Knitted Hat",
    price: "$18.00",
    imageUrl:
      "https://preview.redd.it/monstera-leaf-v0-rwqljti8uggd1.jpg?width=1080&crop=smart&auto=webp&s=05230889f1d13c7bd3c9ce110997262081026f8d",
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16  border-b-2 border-purple-500/10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-4 w-full bg-[#60AFFF] hover:bg-[#28C2FF] text-white py-2 px-4 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
