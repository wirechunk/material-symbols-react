import type { SVGProps } from "react";
export const SvgEnableFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-96q-79 0-149-30t-122.5-82Q156-260 126-330T96-479q0-129 76.5-231T372-848v76q-92 35-148 115t-56 179q0 129 91 219.5T480-168q130 0 221-91t91-220q0-99-56-179T588-772v-76q123 36 199.5 138T864-479q0 79-30 149t-82.5 122q-52.5 52-122 82T480-96Zm0-240L288-528l51-51 105 105v-390h72v390l105-105 51 51-192 192Z" />
  </svg>
);
