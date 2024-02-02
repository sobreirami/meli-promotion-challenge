import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function classNameMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
