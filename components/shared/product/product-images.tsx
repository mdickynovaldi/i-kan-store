"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ProductImages = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Gambar Utama */}
      <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
        <Image
          src={images[currentImage]}
          alt="Product main image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Carousel Thumbnail */}
      <Carousel opts={{ align: "start", dragFree: true }}>
        <CarouselContent className="ml-0">
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="pl-2 basis-1/4 md:basis-1/6 lg:basis-1/5"
            >
              <div
                className={cn(
                  "aspect-square relative border rounded-lg overflow-hidden cursor-pointer transition-all",
                  index === currentImage
                    ? "border-2 border-primary dark:border-yellow-500 bg-white dark:bg-gray-800"
                    : "hover:border-primary dark:hover:border-yellow-200 bg-gray-50 dark:bg-gray-700",
                  "dark:bg-muted-foreground"
                )}
                onClick={() => setCurrentImage(index)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 20vw, 10vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductImages;
