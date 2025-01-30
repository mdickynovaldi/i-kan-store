import ProductList from "@/components/shared/product/product-list";
import getLatestProducts from "@/lib/actions/product.actions";

export default async function Home() {
  const latestProduct = await getLatestProducts();
  return (
    <div>
      <ProductList data={latestProduct} title="Latest Products" limit={4} />
    </div>
  );
}
