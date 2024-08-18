// app/product/[id]/page.tsx
import { db } from "@/lib/firebaseConfig"; // Ensure this path is correct
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";

interface Product {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  if (!id) {
    notFound();
  }

  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      notFound();
    }

    const product = docSnap.data() as Product;

    return (
      <section>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <img src={product.imageUrl} alt={product.name} />
      </section>
    );
  } catch (error) {
    console.error("Error fetching product data:", error);
    notFound();
  }
};

export default ProductPage;
