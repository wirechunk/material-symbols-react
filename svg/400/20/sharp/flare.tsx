import type { SVGProps } from "react";
export const SvgFlare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M48-444v-72h240v72H48Zm271-147-80-80 50-51 81 80-51 51Zm125-81v-240h72v240h-72Zm197 82-51-51 80-80 51 51-80 80Zm31 146v-72h240v72H672Zm-192 84q-51 0-85.5-34.5T360-480q0-51 34.5-85.5T480-600q51 0 85.5 34.5T600-480q0 51-34.5 85.5T480-360Zm190 121-80-80 51-51 80 80-51 51Zm-381 0-51-50 80-81 51 51-80 80ZM444-48v-240h72v240h-72Z" />
  </svg>
);
