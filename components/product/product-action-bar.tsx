"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { useStore } from "@/hooks/zustand-hooks";
import { useCartStore } from "@/stores/cart-store";

export default function ProductActionBar() {
  const cartStore = useStore(useCartStore, (state) => state);
  const router = useRouter();
  const { toast } = useToast();

  const [total, setTotal] = useState(1);
  const handleMinusClick = () => {
    if (total > 1) {
      setTotal(total - 1);
    }
  };
  const handlePlusClick = () => {
    setTotal(total + 1);
  };
  const handleSubmitProduct = () => {
    toast({
      variant: "success",
      title: "Thêm sản phẩm thành công",
      description: "Kiểm tra tại giỏ hàng của bạn",
    });
    cartStore?.addToCart(
      {
        id: 1,
        name: "Tra Sách",
        options: [{ id: 1, value: "Tra Sách", price: 59000 }],
      },
      total
    );
    router.back();
  };
  return (
    <div className="w-full fixed bottom-0 h-20 bg-white p-4 pb-6 flex gap-6 items-center justify-center select-none">
      <div className="flex gap-4 items-center">
        <div
          onClick={handleMinusClick}
          className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center"
        >
          <Minus className="text-orange-500" />
        </div>
        <span className="font-bold w-4 flex items-center justify-center">
          {total}
        </span>
        <div
          onClick={handlePlusClick}
          className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center"
        >
          <Plus className="text-orange-500" />
        </div>
      </div>
      <Button
        onClick={handleSubmitProduct}
        className="flex-grow flex items-center justify-center bg-orange-500 text-lg hover:bg-orange-400"
      >
        Chọn · 59000
      </Button>
    </div>
  );
}
