// pages/product/[id].tsx
import { GetServerSideProps } from "next";
import { db } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

interface Product {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

interface ProductPageProps {
  product: Product | null;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.imageUrl} alt={product.name} />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (
  context
) => {
  const { id } = context.params!;

  if (!id || typeof id !== "string") {
    return { props: { product: null } };
  }

  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return { props: { product: null } };
    }

    const product = docSnap.data() as Product;

    return {
      props: { product },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return { props: { product: null } };
  }
};

export default ProductPage;
