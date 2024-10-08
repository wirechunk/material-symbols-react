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
    <path d="M30.48-126.48V-336H120v120h120v89.52H30.48Zm689.52 0V-216h120v-120h89.52v209.52H720ZM168-264v-432h72v432h-72Zm120 0v-432h48v432h-48Zm120 0v-432h72v432h-72Zm120 0v-432h96v432h-96Zm132 0v-432h48v432h-48Zm84 0v-432h48v432h-48ZM30.48-624v-209.52H240V-744H120v120H30.48ZM840-624v-120H720v-89.52h209.52V-624H840Z" />
  </svg>
);
