"use client";

import ConfirmOrderBar from "@/components/order/confirm-order-bar";
import PaymentSection from "@/components/order/payment";
import ShipmentSection from "@/components/order/shipment";
import { Button } from "@/components/ui/button";

import {
  ArrowLeft,
  ChevronRight,
  CircleDollarSign,
  MapPin,
  Plus,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OrderPage() {
  const router = useRouter();
  const [payment, setPayment] = useState();

  const handleBack = () => {
    router.back();
  };
  return (
    <section className="relative min-h-screen bg-gray-300">
      <div className="w-full px-4 flex items-center justify-center py-6 relative bg-white">
        <div
          onClick={handleBack}
          className="left-4 w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center absolute"
        >
          <ArrowLeft />
        </div>
        <span className="font-bold text-lg">Xác nhận đơn hàng</span>
      </div>
      {/* Ship location */}
      <Link href={"/location"} className="w-full mt-1 bg-white p-4 flex gap-2">
        <div className="w-8 h-12 flex items-center">
          <MapPin className="text-red-400" />
        </div>
        <div className="flex-grow-[5] flex flex-col">
          <span className="font-bold text-base">Nhà của tui</span>
          <span className="text-sm">112, Đường X, P.10, Q.6, Hồ Chí Minh</span>
        </div>
        <div className="flex-grow flex items-center justify-end">
          <ChevronRight />
        </div>
      </Link>
      {/* Ship method */}
      <ShipmentSection />
      {/* Product Selected */}
      <div className="w-full mt-1 bg-white p-4 flex flex-col gap-2">
        <div className="w-full flex items-center justify-between">
          <span className="font-bold">Sản phẩm đã chọn</span>
          <Link
            href={"/home"}
            className="flex items-center justify-center p-2 bg-orange-200 rounded-full gap-1"
          >
            <Plus size={16} className="text-orange-500" strokeWidth={4} />
            <div className="text-xs font-bold text-orange-600">Thêm</div>
          </Link>
        </div>
        <div className="w-full flex gap-2">
          <div className="relative w-8 h-8 bg-orange-100 rounded-full">
            <Image
              fill
              src={"https://cdn-icons-png.flaticon.com/128/2405/2405453.png"}
              alt="product icon"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col w-2/3">
            <span className="font-bold text-sm">x1 Trà Tây Thi Mĩ Nhân</span>
            <span className="text-sm text-gray-400 line-clamp-1">
              Vừa, Ô long cao cấp, Đường mật, Phô mai dẻo,
            </span>
          </div>
          <div className="flex justify-end items-center flex-grow font-bold">
            59.000đ
          </div>
        </div>
      </div>
      {/* Total Order */}
      <div className="w-full mt-1 bg-white p-4 flex flex-col gap-3">
        <span className="font-bold">Sản phẩm đã chọn</span>
        <div className="flex justify-between font-semibold">
          <span>Thành tiền</span>
          <span>59.000đ</span>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="flex justify-between font-semibold">
          <span>Phí giao hàng</span>
          <span>0đ</span>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="flex justify-between">
          <span className="text-orange-500">Chọn khuyến mãi</span>
          <ChevronRight />
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="flex justify-between font-bold">
          <span>Tổng thanh toán</span>
          <span>59.000đ</span>
        </div>
      </div>
      {/* Payment Method */}
      <PaymentSection />
      {/* Footer Bar */}
      <ConfirmOrderBar />
    </section>
  );
}
