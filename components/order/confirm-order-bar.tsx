import { usePaymentStore } from "@/stores/confirm-order-store";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";

export default function ConfirmOrderBar() {
  const method = usePaymentStore((state) => state.paymentMethod);

  return (
    <div className="fixed left-0 bottom-0 w-full h-32 bg-white p-4 flex flex-col gap-2">
      <div className="w-full flex justify-between items-center">
        <span>Tổng cộng</span>
        <span className="font-bold text-lg">59.000đ</span>
      </div>
      {method.id === 2 ? (
        <Dialog>
          <DialogTrigger className="w-full bg-orange-400 hover:bg-orange-500 text-lg text-white rounded-xl flex-grow font-bold py-2">
            Đặt đơn
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>QR Chuyển Khoản Ngân Hàng</DialogTitle>
              <DialogDescription>
                Quét mã tại đẩy để hoàn tất đơn hàng
              </DialogDescription>
              <div className="w-full h-96 relative">
                <Image
                  src={
                    "https://img.vietqr.io/image/VPB-200121112001-compact.png"
                  }
                  fill
                  alt={"QR Code"}
                />
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ) : (
        <Button className="w-full bg-orange-400 hover:bg-orange-500 text-lg text-white rounded-xl flex-grow font-bold py-2">
          Đặt Đơn
        </Button>
      )}
    </div>
  );
}
