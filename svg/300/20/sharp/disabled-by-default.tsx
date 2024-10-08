import type { SVGProps } from "react";
export const SvgDisabledByDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-216h528v-528H216v528Zm-52 52v-632h632v632H164Zm186-149.23 130.19-130.19 130.18 130.19 36.4-36.4-130.19-130.18L646.77-610 610-646.77 479.81-516.58 349.63-646.77l-36.4 36.4 130.19 130.18L313.23-350 350-313.23ZM216-216v-528 528Z" />
  </svg>
);
