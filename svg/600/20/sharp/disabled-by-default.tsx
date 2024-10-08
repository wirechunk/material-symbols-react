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
    <path d="M222.78-222.78h514.44v-514.44H222.78v514.44Zm-98 98v-710.44h710.44v710.44H124.78Zm225.22-168 130.19-130.19 130.18 130.19 56.85-56.85-130.19-130.18L667.22-610 610-667.22 479.81-537.03 349.63-667.22l-56.85 56.85 130.19 130.18L292.78-350 350-292.78Zm-127.22 70v-514.44 514.44Z" />
  </svg>
);
