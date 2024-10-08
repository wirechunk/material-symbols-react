import type { SVGProps } from "react";
export const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M202.87-628.76v425.89h554.26v-425.89H644.3v320.48L480-390.43l-164.3 82.15v-320.48H202.87Zm-91 516.89v-611.59l103.48-124.91h529.3l103.48 124.91v611.59H111.87Zm112.5-605.5h511.26l-34-40H258.37l-34 40Zm179.93 88.61v176.61L480-490l75.7 37.85v-176.61H404.3Zm-201.43 0h554.26-554.26Z" />
  </svg>
);
