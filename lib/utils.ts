import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, isToday, isYesterday } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  const dateObj = new Date(date);

  if (isToday(dateObj)) {
    return "Today";
  } else if (isYesterday(dateObj)) {
    return "Yesterday";
  } else {
    return format(dateObj, "MMMM dd");
  }
}
