import React from "react";

const page: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Our mission is to provide the best products and services to our
          customers. We are dedicated to ensuring that our customers have a
          great experience with our products, and we strive to exceed their
          expectations every day.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          We started our journey in 2022 with a simple goal: to make
          high-quality products accessible to everyone. Since then, we have
          grown and expanded, but our commitment to quality and customer
          satisfaction remains at the heart of everything we do.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
            <p className="mt-4">
              John is the visionary behind our company, with years of experience
              in the industry. He leads the team with passion and dedication.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">Head of Marketing</p>
            <p className="mt-4">
              Jane oversees our marketing strategies and ensures that our brand
              message reaches our target audience effectively.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Emily Johnson</h3>
            <p className="text-gray-600">Customer Support Manager</p>
            <p className="mt-4">
              Emily is dedicated to providing excellent customer support and
              resolving any issues our customers may encounter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
