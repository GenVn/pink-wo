"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function OrderPage() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <section className="relative min-h-screen">
      <div className="w-full px-4 flex items-center justify-center py-6 relative bg-white">
        <div
          onClick={handleBack}
          className="left-4 w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center absolute"
        >
          <ArrowLeft />
        </div>
        <span className="font-bold text-2xl">Giỏ hàng</span>
      </div>
      <Link href={"/order"} className="w-full flex flex-col gap-2 px-4 mt-4">
        <div className="w-full p-4 bg-gray-50 rounded-2xl shadow-lg space-y-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-xl">🐧 Đơn Cánh Cụt</span>
              <div className="font-bold">5 sản phẩm - 29 phút - 3.3km</div>
            </div>
            <div className="flex-grow">
              <div className="flex -space-x-9">
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center gap-4">
            <div className="font-bold flex-grow text-lg flex py-2 items-center justify-center bg-gray-200 rounded-full">
              Đang đặt
            </div>
            <div className="font-bold flex-grow text-lg flex py-2 items-center justify-center bg-orange-400 text-white rounded-full">
              Xem chi tiết
            </div>
          </div>
        </div>
      </Link>
      <Link href={"/order"} className="w-full flex flex-col gap-2 px-4 mt-4">
        <div className="w-full p-4 bg-lime-200 rounded-2xl shadow-lg space-y-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-xl">☃️ Đơn Người Tuyết</span>
              <div className="font-bold">5 sản phẩm - 29 phút - 3.3km</div>
            </div>
            <div className="flex-grow">
              <div className="flex -space-x-9">
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center gap-4">
            <div className="font-bold flex-grow text-lg flex py-2 items-center justify-center bg-lime-400 rounded-full">
              Đã đặt
            </div>
            <div className="font-bold flex-grow text-lg flex py-2 items-center justify-center bg-orange-400 text-white rounded-full">
              Đặt lại
            </div>
          </div>
        </div>
      </Link>
      <Link href={"/order"} className="w-full flex flex-col gap-2 px-4 mt-4">
        <div className="w-full p-4 bg-red-100 rounded-2xl shadow-lg space-y-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-xl">🦘 Đơn Kangaroo</span>
              <div className="font-bold">5 sản phẩm - 29 phút - 3.3km</div>
            </div>
            <div className="flex-grow">
              <div className="flex -space-x-9">
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
                <Image
                  src={
                    "https://pinkwo-dev-media-compressed-images.s3.ap-southeast-1.amazonaws.com/TraTayThi.webp"
                  }
                  width={60}
                  height={60}
                  className="rounded-full ring-2 ring-white"
                  alt="test"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex items-center gap-4">
            <div className="font-bold flex-grow text-lg flex py-2 items-center justify-center bg-red-300 rounded-full">
              Đã hủy
            </div>
            <div className="font-bold flex-grow text-lg flex py-2 items-center justify-center bg-orange-400 text-white rounded-full">
              Đặt lại
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
