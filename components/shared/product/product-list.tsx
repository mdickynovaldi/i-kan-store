import Product from "@/types/model";
import ProductCart from "./product-cart";

export default function ProductList({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) {
  const LimitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {LimitedData.map((product: Product) => (
            <ProductCart key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">No products found</div>
      )}
    </div>
  );
}
