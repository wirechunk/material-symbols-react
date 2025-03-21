import type { SVGProps } from "react";
export const SvgPiano = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v640H160Zm40-40h146.15v-192.31h-50V-760H200v560Zm413.85 0H760v-560h-96.15v367.69h-50V-200Zm-232.31 0h196.92v-192.31h-50V-760h-96.92v367.69h-50V-200Z" />
  </svg>
);
