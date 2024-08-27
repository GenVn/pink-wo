import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PaymentMethod, usePaymentStore } from "@/stores/confirm-order-store";
import { DialogClose } from "@radix-ui/react-dialog";
import { ChevronRight, CircleDollarSign, Landmark, Wallet } from "lucide-react";

const paymentMethod = [
  {
    id: 1,
    name: "Tiền mặt",
    icon: CircleDollarSign,
    desc: "Bạn trả tiền mặt khi nhận món",
  },
  {
    id: 2,
    name: "Bank Transfer [Chuyển Khoản Ngân Hàng]",
    icon: Landmark,
    desc: "Lấy số tài khoản ngân hàng để chuyển khoản",
  },
  {
    id: 3,
    name: "Pinkwo Wallet [Ví Pinkwo]",
    icon: Wallet,
    desc: "Sử dụng điểm để thanh toán",
  },
  {
    id: 4,
    name: "Momo Wallet [Ví Momo]",
    icon: Wallet,
    desc: "Bạn thanh toán trước qua momo",
  },
];

export default function PaymentSection() {
  const method = usePaymentStore((state) => state.paymentMethod);
  const changeMethod = usePaymentStore((state) => state.setPaymentMethod);
  const handleChangePayment = (value: PaymentMethod) => {
    changeMethod(value);
  };
  return (
    <div className="w-full mt-1 bg-white p-4 flex flex-col gap-3 mb-32">
      <span className="font-bold">Chọn phương thức thanh toán</span>
      <Dialog>
        <DialogTrigger className="w-full flex gap-2 py-2 items-center">
          <method.icon />
          <span className="font-semibold">{method.name}</span>
          <div className="flex flex-grow justify-end">
            <ChevronRight className="" />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Phương thức thanh toán</DialogTitle>
            <DialogDescription>
              Chọn phương thức thanh toán của bạn
            </DialogDescription>
          </DialogHeader>
          <div className="w-full flex flex-col gap-4">
            {paymentMethod.map((method, index) => (
              <DialogClose
                onClick={() => handleChangePayment(method)}
                key={method.name}
                className="w-full flex gap-2 items-center"
              >
                <method.icon />
                <div className="flex flex-col gap-3 justify-start">
                  <span className="font-semibold text-start">
                    {method.name}
                  </span>
                  <span className="text-start">{method.desc}</span>
                </div>
                <div className="flex flex-grow justify-end">
                  <ChevronRight className="" />
                </div>
              </DialogClose>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
