import type { SVGProps } from "react";
export const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-414.08l200-85.15v78.46l200-80V-520h320v400H120Zm40-40h640v-320H480v-82l-200 80v-78l-120 53v347Zm289.23-98.46h61.54v-123.08h-61.54v123.08Zm-160 0h61.54v-123.08h-61.54v123.08Zm320 0h61.54v-123.08h-61.54v123.08ZM840-520H715.38l40-289.23h49.24L840-520ZM160-160h640-640Z" />
  </svg>
);
