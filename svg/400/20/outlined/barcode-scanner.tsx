import type { SVGProps } from "react";
export const SvgBarcodeScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M48-144v-192h72v120h120v72H48Zm672 0v-72h120v-120h72v192H720ZM168-264v-432h72v432h-72Zm120 0v-432h48v432h-48Zm120 0v-432h72v432h-72Zm120 0v-432h96v432h-96Zm132 0v-432h48v432h-48Zm84 0v-432h48v432h-48ZM48-624v-192h192v72H120v120H48Zm792 0v-120H720v-72h192v192h-72Z" />
  </svg>
);
