import ProductCards from "@/src/components/Products/ProductCards";
import { IProduct } from "@/src/type";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <h2>Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product : IProduct) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
