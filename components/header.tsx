"use client";
import { cn } from "@/lib/utils";
import { Bell, Ticket } from "lucide-react";
import { usePathname } from "next/navigation";

export default function HeaderSection() {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/home") {
    return (
      <header className={cn("fixed top-0 pt-2 h-12 w-full px-4 z-10 bg-white")}>
        <div className="flex h-full w-full justify-between">
          <div className="flex gap-2">
            <a href={"/"} className="flex items-center justify-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4949/4949857.png"
                className="relative h-5 w-5"
                alt="logo icon"
              />
            </a>
            <div
              className={cn(
                "flex flex-1",
                pathname === "/" ? "flex-col" : "items-center"
              )}
            >
              <span
                className={cn(
                  "text-sm font-bold",
                  pathname === "/" ? "hidden" : ""
                )}
              >
                Chào bạn mới 👋
              </span>
              <span
                className={cn("font-bold", pathname === "/" ? "" : "hidden")}
              >
                Pinkwo
              </span>
              <span
                className={cn(
                  "text-sm text-green-500 font-semibold",
                  pathname === "/" ? "" : "hidden"
                )}
              >
                Đang mở cửa
              </span>
            </div>
          </div>
          <div
            className={cn("flex gap-4", pathname === "/home" ? "" : "hidden")}
          >
            <div className="flex h-full items-center justify-center gap-2 rounded-full px-4 shadow-lg">
              <Ticket size={20} color="#FF7622" />
              <span className="text-sm font-bold">32</span>
            </div>
            <div className="relative flex h-full w-12 items-center justify-center rounded-full shadow-lg">
              <Bell size={20} />
              <div className="absolute -right-1 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500">
                <span className="text-xs font-bold text-white">1</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } else {
    return null;
  }
}
