import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative border-b-2 border-purple-500/10 text-[#3066BE] bg-customBrown  h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Image
          src="/image.jpg"
          alt="Handmade Crafts Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to EkaCrafts</h1>
        <p className="text-xl mb-6">
          Discover the beauty of handmade crafts, crafted with love and care.
        </p>
        <a
          href="/shop"
          className="bg-customPurple bg-[#3066BE] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-customLightPurple transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
