"use client";

import { useStore } from "@/hooks/zustand-hooks";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/stores/cart-store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductBar() {
  const cartStore = useStore(useCartStore, (state) => state);
  const pathname = usePathname();
  const firstRoute = pathname.split("/")[1];
  const isActive = () => {
    if (cartStore?.cart.length! == 0) {
      return false;
    }
    if (
      firstRoute === "order" ||
      firstRoute === "cart" ||
      firstRoute === "location"
    ) {
      return false;
    }
    if (pathname.split("/").length > 3) {
      return false;
    }
    return true;
  };
  return (
    <Link
      href={"/order"}
      className={cn(
        "fixed bottom-20 w-full h-20 left-0 px-8 py-2",
        isActive() ? null : "hidden"
      )}
    >
      <div className="w-full h-full bg-gray-100 rounded-full flex px-4 items-center gap-2">
        <div className="py-2 flex items-center gap-2">
          <div className="relative w-8 h-8 bg-orange-100 rounded-full">
            <Image
              fill
              src={"https://cdn-icons-png.flaticon.com/128/2405/2405453.png"}
              alt="product icon"
              className="rounded-full"
            />
          </div>
          <span className="font-bold mr-8 line-clamp-1">
            Trà Tây Thi Mĩ Nhân
          </span>
        </div>

        <div className="flex p-2 gap-2 rounded-full flex-grow bg-orange-400">
          <div className="w-8 h-8 font-bold rounded-full bg-white text-orange-400 flex items-center justify-center">
            1
          </div>
          <span className="flex-grow flex items-center text-white font-bold text-lg">
            59.0000đ
          </span>
        </div>
      </div>
    </Link>
  );
}
