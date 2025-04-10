import type { SVGProps } from "react";
export const SvgHost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-160v-640h312.31v640H120Zm407.69 0v-640H840v640H527.69ZM160-200h232.31v-560H160v560Zm407.69 0H800v-560H567.69v560ZM215.38-384.62h120v-40h-120v40Zm409.24 0h120v-40h-120v40Zm-409.24-112.3h120v-40h-120v40Zm409.24 0h120v-40h-120v40ZM215.38-610h120v-40h-120v40Zm409.24 0h120v-40h-120v40ZM160-200h232.31H160Zm407.69 0H800 567.69Z" />
  </svg>
);
