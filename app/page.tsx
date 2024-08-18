import FeaturedProducts from "@/components/FeatureProducts";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <NewsletterSignup />
    </main>
  );
}
