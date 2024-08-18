"use client";
import React, { useState } from "react";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission to your backend or a service like Mailchimp
    console.log(`Email submitted: ${email}`);
    setSuccess(true);
    setEmail("");
  };

  return (
    <section className="py-16 bg-brown-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Stay Updated</h2>
        <p className="text-gray-600 mb-8">
          Sign up for our newsletter to get the latest news on new arrivals and
          special offers.
        </p>
        {success ? (
          <p className="text-green-500 font-semibold">
            Thank you for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              type="email"
              className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
