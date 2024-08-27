"use client";
import { cn } from "@/lib/utils";
import { Coffee, House, TicketPercent, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    name: "Trang chủ",
    href: "/",
    icon: House,
  },
  {
    name: "Xem menu",
    href: "/menu",
    icon: Coffee,
  },
  {
    name: "Ưu đãi",
    href: "/promotion",
    icon: TicketPercent,
  },
  {
    name: "Cá nhân",
    href: "/profile",
    icon: User,
  },
];

export default function NavigationBar() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };
  const isHidden = (href: string) => {
    const pathSegments = href
      .split("/")
      .filter((segment) => segment.length > 0);
    if (pathSegments.length >= 3) {
      return true;
    }
    if (href === "/order") {
      return true;
    }
    return false;
  };

  return (
    <nav
      className={cn(
        "w-full fixed bottom-0 bg-white left-0 px-4 flex gap-4 py-3 border-t justify-between",
        isHidden(pathname) ? "hidden" : null
      )}
    >
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "w- flex flex-col items-center justify-center text-gray-600",
            isActive(item.href) ? "text-red-400" : ""
          )}
        >
          <item.icon />
          <span className="font-bold">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}
