import {
  ChevronRight,
  CircleDollarSign,
  Landmark,
  Wallet,
  LucideIcon,
} from "lucide-react";
import { create } from "zustand";

export interface PaymentMethod {
  id: number;
  name: string;
  desc: string;
  icon: LucideIcon;
}

export interface ConfirmOrderState {
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
}

export const usePaymentStore = create<ConfirmOrderState>((set) => ({
  paymentMethod: {
    id: 1,
    name: "Tiền mặt",
    desc: "Bạn trả tiền mặt khi nhận món",
    icon: CircleDollarSign,
  },
  setPaymentMethod: (method: PaymentMethod) => {
    set((state) => ({ paymentMethod: method }));
  },
}));
