import type { SVGProps } from "react";
export const SvgPlayArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-216v-528l408 264-408 264Zm73-265Zm-1 133 204-132-204-132v264Z" />
  </svg>
);
