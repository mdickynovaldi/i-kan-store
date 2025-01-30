import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import ProductPrice from "@/components/shared/product/product-price";
import ProductImages from "@/components/shared/product/product-images";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="container max-w-6xl py-8">
      <Card>
        <CardContent className="grid gap-8 p-8 md:grid-cols-2">
          {/* Bagian Gambar Produk */}
          <ProductImages images={product.images} />

          {/* Detail Produk */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="outline" className="text-sm">
                {product.brand}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Number(product.rating)
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">
                  ({product.rating}/5)
                </span>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <ProductPrice
                  className="text-5xl"
                  value={Number(product.price)}
                />
                {product.stock > 0 ? (
                  <Badge variant="secondary" className="text-green-600">
                    Stock Available: {product.stock}
                  </Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            <Button
              size="lg"
              className="w-full text-lg"
              disabled={product.stock <= 0}
            >
              {product.stock > 0 ? "Tambahkan ke Keranjang" : "Stok Habis"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;
