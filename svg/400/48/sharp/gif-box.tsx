import type { SVGProps } from "react";
export const SvgGifBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Zm120-220h120v-70h-30v40h-60v-100h88v-30H300v160Zm165 0h30v-160h-30v160Zm75 0h30v-60h70v-30h-70v-40h90v-30H540v160Z" />
  </svg>
);
