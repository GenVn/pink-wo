import { Category, Product } from "@/types";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface ProductsSection {
  productTitle: string;
  product: Category[];
}

async function getData() {
  const res = await fetch(
    "http://api.pinkwo.com/gc-product-catalog-service/api/v1/products/?page=0&size=20"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductsSection({
  productTitle,
}: ProductsSection) {
  const { data }: { data: Product[] } = await getData();
  return (
    <div className="w-full flex flex-col gap-4">
      <span className="font-bold">{productTitle}</span>
      <div className="w-full grid grid-cols-2 gap-6">
        {data?.map((productItem) => (
          <Link
            href={`/home/${productItem.id}`}
            key={productItem.name}
            className="col-span-1 flex flex-col gap-2 rounded-lg"
          >
            <div className="w-full relative h-32">
              <Image
                fill
                alt={productItem.name}
                src={productItem.imageUrl}
                className="rounded-lg"
              ></Image>
            </div>
            <span className="text-sm font-bold">{productItem.name}</span>
            <span className="text-xs line-clamp-2 text-gray-500">
              {productItem.description}
            </span>
            <div className="w-full flex justify-between items-center">
              <span className="text-sm font-semibold">39.000 VNĐ</span>
              <button className="w-8 h-8 bg-orange-400 grid place-items-center rounded-full">
                <Plus color="white" />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
