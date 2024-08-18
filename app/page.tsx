import FeaturedProducts from "@/components/FeatureProducts";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import Testimonials from "@/components/Testimonials";

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
