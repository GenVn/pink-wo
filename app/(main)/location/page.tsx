"use client";

import GoogleMapComponent from "@/components/google-map";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  EllipsisVertical,
  LocateFixed,
  Map,
  MapPin,
  MapPinHouse,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const ctaLists = [
  {
    id: 1,
    name: "Dùng gần đây",
    param: null,
  },
  {
    id: 2,
    name: "Đề xuất",
    param: "recommend",
  },
  {
    id: 3,
    name: "Đã lưu",
    param: "saved",
  },
];

export default function LocationPage() {
  // const searchParams = useSearchParams();
  const router = useRouter();

  // const ctaParam = searchParams.get("cta");
  const handleBack = () => {
    router.back();
  };
  return (
    <section className="relative min-h-screen">
      {/* Title */}
      <div className="w-full px-4 flex items-center justify-center py-6 relative">
        <div
          onClick={handleBack}
          className="left-4 w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center absolute"
        >
          <ArrowLeft />
        </div>
        <span className="font-bold text-lg">Thay đổi vị trí</span>
      </div>
      {/* Location Picking */}
      <div className="w-full px-4 flex items-center justify-center py-4 relative">
        <Input
          placeholder="Nhà của tui"
          className="outline-none focus-visible:ring-0 bg-gray-100 relative pl-9 font-bold placeholder:text-black"
        />
        <MapPin className="text-red-400 absolute left-6" />
      </div>
      {/* CTA */}
      <div className="w-full px-4 flex flex-col items-center justify-center py-4 relative gap-4">
        <div className="w-full flex gap-4">
          {ctaLists?.map((cta) => (
            <div
              className={cn(
                "rounded-full flex-1 flex items-center justify-center bg-white text-sm p-2 font-bold"
              )}
              key={cta.id}
            >
              {cta.name}
            </div>
          ))}
        </div>
      </div>
      {/* Fast location picking */}
      <div className="w-full px-4 flex flex-col items-center justify-center py-4 relative gap-4">
        {/* Current location */}
        <div className="w-full flex gap-2">
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full p-2">
              <LocateFixed size={32} className="text-gray-500" />
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-center gap-2">
            <span className="text-black font-bold">Vị trí hiện tại</span>
            <span className="text-wrap">
              199, Điện Biên Phủ, P.14, Q1, TP.Hồ Chí Minh
            </span>
          </div>
          <div className="flex items-center">
            <EllipsisVertical className="text-gray-500" />
          </div>
        </div>
        {/* Recent location */}
        <div className="w-full flex gap-2">
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full p-2">
              <LocateFixed size={32} className="text-gray-500" />
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-center gap-2">
            <span className="text-black font-bold line-clamp-1">
              129/14/10, Nguyễn Thị Nhỏ, P.14, Q.5
            </span>
            <span className="text-wrap">
              129/14/10, Nguyễn Thị Nhỏ, P.14, Q.5, TP.Hồ Chí Minh
            </span>
          </div>
          <div className="flex items-center">
            <EllipsisVertical className="text-gray-500" />
          </div>
        </div>
        {/* Recent location */}
        <div className="w-full flex gap-2">
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full p-2">
              <MapPinHouse size={32} className="text-gray-500" />
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-center gap-2">
            <span className="text-black font-bold line-clamp-1">
              Tiệm trà nhỏ của tui
            </span>
            <span className="text-wrap">
              29, An Dương Vương, P.5, Q.5, TP.Hồ Chí Minh
            </span>
          </div>
          <div className="flex items-center">
            <EllipsisVertical className="text-gray-500" />
          </div>
        </div>
      </div>
      <Link
        href={"/location/add-location"}
        className="w-full py-4 flex items-center justify-center gap-4 cursor-pointer"
      >
        <span className="font-bold">Chọn từ bản đồ</span>
      </Link>
    </section>
  );
}
