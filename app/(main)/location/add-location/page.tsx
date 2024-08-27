"use client";
import GoogleMapComponent from "@/components/google-map";
import CustomMap from "@/components/google-map";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddLocationPage() {
  const router = useRouter();
  return (
    <section className="relative min-h-screen">
      <div className="w-full px-4 flex items-center justify-center py-6 relative">
        <div
          onClick={() => router.back()}
          className="left-4 w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center absolute"
        >
          <ArrowLeft />
        </div>
        <span className="font-bold text-lg">Thêm vị trí</span>
      </div>
      <GoogleMapComponent />
    </section>
  );
}
