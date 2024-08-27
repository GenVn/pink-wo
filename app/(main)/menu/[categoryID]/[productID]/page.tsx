import BackBtn from "@/components/back";
import ProductActionBar from "@/components/product/product-action-bar";
import ProductOptionSection from "@/components/product/product-option";
import { Input } from "@/components/ui/input";
import { ProductDetail } from "@/types";
import { Heart, X } from "lucide-react";
import Image from "next/image";

export type ProductDetailPageProps = {
  params: {
    categoryID: string;
    productID: string;
  };
};

async function getData(id: string) {
  const res = await fetch(
    `http://api.pinkwo.com/gc-product-catalog-service/api/v1/products/${id}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
function addIsMultipleOptions(options: ProductDetail["options"]) {
  const keyOfOtpMultiple = {
    "tea-size": false,
    "tea-teaType": true,
    "tea-topping": true,
    "tea-sugar": false,
    "tea-ice": false,
    "tea-packed": true,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { productDetail, options }: ProductDetail = await getData(
    params.productID
  );

  return (
    <section className="w-full h-screen min-h-screen relative">
      {/* Product Image */}
      <div className="max-w-full h-64 relative">
        <Image
          fill
          src={productDetail.imageUrl}
          alt="product img"
          className="object-cover"
        ></Image>
        <BackBtn />
      </div>
      {/* Product infomation */}
      <div className="w-full p-4 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{productDetail.name}</h1>
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <Heart />
          </div>
        </div>
        <span className="text-gray-500 font-semibold text-xl">59.000đ</span>
        <p className="text-black font-semibold">{productDetail.description}</p>
      </div>
      {/* Promotion for membership (current not done) */}
      {/* Product option */}
      {options.map((option) => (
        <ProductOptionSection
          key={option.id}
          id={option.id}
          name={option.name}
          isMultiSelect={option.isMultiSelect}
          optionValues={option.optionValues}
        />
      ))}
      {/* Optional requirement */}
      <div className="p-4 space-y-4 pb-28">
        <div>
          <h1 className="text-lg font-bold">Yêu cầu khác</h1>
          <p>Những tùy chọn khác của bạn</p>
        </div>
        <Input type="text" placeholder="Thêm ghi chú của bạn" />
      </div>
      <ProductActionBar />
    </section>
  );
}
