import type { SVGProps } from "react";
export const SvgStop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M320-640v320-320Zm-60 380v-440h440v440H260Zm60-60h320v-320H320v320Z" />
  </svg>
);
