"use client";
import { cn } from "@/lib/utils";
import { House, Menu, Ticket } from "lucide-react";
import { Coffee } from "lucide-react";
import { usePathname } from "next/navigation";
export default function NavigationSection() {
  const pathname = usePathname();
  const navigationItems = [
    {
      name: "Trang chủ",
      icon: House,
    },
    {
      name: "Đặt hàng",
      icon: Coffee,
    },
    {
      name: "Ưu đãi",
      icon: Ticket,
    },
    {
      name: "Khác",
      icon: Menu,
    },
  ];
  if (pathname === "/" || pathname === "/home") {
    return (
      <nav
        className={cn(
          "w-full h-16 fixed bottom-0 flex px-4 py-2 gap-4 bg-white",
          pathname === "/" ? "hidden" : ""
        )}
      >
        {navigationItems.map((navItem) => (
          <div
            key={navItem.name}
            className="flex flex-col items-center gap-2 w-full justify-between cursor-pointer"
          >
            <navItem.icon className="" />
            <span className="text-xs">{navItem.name}</span>
          </div>
        ))}
      </nav>
    );
  } else return null;
}
