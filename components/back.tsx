"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackBtnProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function BackBtn(props: BackBtnProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.back();
      }}
      className={cn(
        "absolute bg-gray-300 w-8 h-8 right-4 top-4 flex items-center justify-center rounded-full"
      )}
      {...props}
    >
      <X />
    </div>
  );
}
