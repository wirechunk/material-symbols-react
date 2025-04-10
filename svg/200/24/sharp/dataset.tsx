import type { SVGProps } from "react";
export const SvgDataset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v640H160Zm40-40h560v-560H200v560Zm0 0v-560 560Zm100-340h120v-120H300v120Zm240 0h120v-120H540v120ZM300-300h120v-120H300v120Zm240 0h120v-120H540v120Z" />
  </svg>
);
