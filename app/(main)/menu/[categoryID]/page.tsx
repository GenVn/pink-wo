import { Button } from "@/components/ui/button";
import { CategoryList } from "@/types";
import Image from "next/image";
import Link from "next/link";

const categoryIDMap = {
  "1": "Trà Sữa",
  "2": "Trà Trái Cây",
  "3": "Trà",
  "4": "Trái Cây Gọt Sẵn",
  "5": "Bánh Tráng",
  "6": "Rau Câu - Bánh Flan",
  "7": "Panna Cotta",
  "8": "Bánh Mì Chấm Sốt",
};
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
export default async function ProductPage({
  params,
}: {
  params: { categoryID: string };
}) {
  const { data }: CategoryList = await getData();
  return (
    <section className="w-full min-h-screen relative px-4 flex flex-col items-center">
      <h1 className="py-4 font-bold text-2xl text-orange-400">
        {categoryIDMap[params.categoryID as keyof typeof categoryIDMap]}
      </h1>
      <div className="w-full px-4 flex flex-col gap-8 mt-4 mb-32">
        {data.map((product) => (
          <Link
            key={product.id}
            href={`/menu/${params.categoryID}/${product.id}`}
            className="pb-2"
          >
            <div className="w-full relative h-48">
              <Image
                src={product.imageUrl}
                alt={`${product.name} image`}
                fill
                className="rounded-xl"
              />
            </div>
            <div className="w-full h-36 flex flex-col gap-2 mt-2 justify-between">
              <span className="font-bold text-lg flex-grow-[1]">
                {product.name}
              </span>
              <p className="font-semibold text-gray-600 flex-grow-[4]">
                {product.description}
              </p>
              <div className="flex justify-between w-full flex-grow-[1] items-center">
                <span className="font-bold text-lg flex-grow">
                  {Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(59000)}
                </span>
                <Button className="bg-orange-400 rounded-2xl flex-grow">
                  Chọn
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
