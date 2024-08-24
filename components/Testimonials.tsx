import React from "react";

interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "I absolutely love the handmade necklace I purchased! The quality is exceptional, and it arrived beautifully packaged.",
    imageUrl:
      "https://news.uchicago.edu/sites/default/files/styles/square_feature/public/images/2023-10/Adam-Mastroianni-square.jpg?h=daa376fd&itok=YR0-YXHv", // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "The woolen scarf is so warm and cozy. I’ve received so many compliments on it!",
    imageUrl:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    feedback:
      "I am thrilled with the ceramic mug I bought. It’s now my favorite cup for morning coffee.",
    imageUrl:
      "https://www.essence.com/wp-content/uploads/2020/04/GettyImages-644702194-scaled.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 border-b-2 border-purple-500/10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
