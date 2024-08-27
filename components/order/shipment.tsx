"use client";
import { Truck } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const shipmentMethods = [
  {
    name: "Express Delivery (Giao Siêu Tốc)",
    desc: "Một síp-bơ chỉ giao một đơn hàng duy nhất.",
  },
  {
    name: "Standard Delivery (Giao Tiêu Chuẩn)",
    desc: "Hệ thống sẽ ghép 2-3 đơn cho mỗi síp-bơ.",
  },
  {
    name: "Saving Delivery (Giao Tiết Kiêm)",
    desc: "Đơn hàng sẽ được giao trong khoảng 2 giờ.",
  },
  {
    name: "Visit Store (Ghé Cửa Hàng)",
    desc: "Bạn ghé cửa hàng để lấy đơn.",
  },
];

export default function ShipmentSection() {
  const [selected, setSelected] = useState(shipmentMethods[1]);
  const handleChangeShipment = (shipmentMethod: {
    name: string;
    desc: string;
  }) => {
    setSelected(shipmentMethod);
  };
  return (
    <div className="w-full mt-1 bg-white p-4 flex flex-col gap-2">
      <div className="w-full flex items-center gap-2">
        <div className="w-8 h-8 flex items-center">
          <Truck className="text-orange-400" />
        </div>
        <span className="font-bold">Tùy chọn giao</span>
      </div>
      {shipmentMethods.map((method, index) => (
        <div
          key={method.name}
          onClick={() => handleChangeShipment(method)}
          className={cn(
            "w-full flex-col p-3 border font-semibold text-sm flex rounded-2xl gap-1",
            selected === method && "border-green-500"
          )}
        >
          <span className="font-semibold">{method.name}</span>
          <span className=" text-gray-400">{method.desc}</span>
        </div>
      ))}
    </div>
  );
}
