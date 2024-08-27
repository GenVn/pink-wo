import { Button } from "@/components/ui/button";
import { CategoryList } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function getData(fetchChilds = false, page = 0, size = 20, sort = "asc") {
  const res = await fetch(
    `http://api.pinkwo.com/gc-product-catalog-service/api/v1/categories/?fetchChilds=${fetchChilds}&page=${page}&size=${size}&sort=${sort}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function MenuPage() {
  const { data }: CategoryList = await getData();
  return (
    <section className="min-h-screen w-full relative flex flex-col items-center px-4">
      <h1 className="py-4 font-bold text-2xl">Danh mục</h1>
      <div className="w-full px-4 flex flex-col gap-6 mt-4 mb-28">
        {data.map((category) => (
          <Link
            href={`/menu/${category.id}`}
            key={category.name}
            className="w-full flex gap-4"
          >
            <Image
              width={140}
              height={140}
              src={category.imageUrl}
              alt={`${category.name} image`}
              className="rounded-xl"
            />
            <div className="flex-grow flex flex-col gap-2 justify-between">
              <span className="font-semibold text-lg">{category.name}</span>
              <span className="font-semibold text-gray-600 text-sm">
                {category.description}
              </span>
              <Button className="bg-orange-400 rounded-2xl">
                Xem sản phẩm
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
