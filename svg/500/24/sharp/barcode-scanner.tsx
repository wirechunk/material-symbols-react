import type { SVGProps } from "react";
export const SvgBarcodeScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M32.59-112.59V-320H120v120h120v87.41H32.59Zm687.41 0V-200h120v-120h87.41v207.41H720ZM160-240v-480h80v480h-80Zm120 0v-480h40v480h-40Zm120 0v-480h80v480h-80Zm120 0v-480h120v480H520Zm160 0v-480h40v480h-40Zm80 0v-480h40v480h-40ZM32.59-640v-207.41H240V-760H120v120H32.59ZM840-640v-120H720v-87.41h207.41V-640H840Z" />
  </svg>
);
