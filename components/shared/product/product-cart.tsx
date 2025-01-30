import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

import { Product } from "@/types";
import ProductPrice from "./product-price";

export default function ProductCart({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <Link href={`/product/${product.slug}`}>
          <div className="overflow-hidden rounded-t-lg">
            <Image
              src={product.images[0]}
              alt={product.name}
              height={300}
              width={300}
              priority={true}
              className="w-full h-[200px] object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-5">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-lg line-clamp-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex-between gap-4">
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
