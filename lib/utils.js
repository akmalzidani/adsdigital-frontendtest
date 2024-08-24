import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function NumberFormat(value) {
  const formatter = new Intl.NumberFormat("id-ID").format(value);
  return formatter;
}
