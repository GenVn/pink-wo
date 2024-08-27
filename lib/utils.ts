import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// fetcher function for swr in client component
export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
