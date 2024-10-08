import type { SVGProps } from "react";
export const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-414.08l200-85.15v78.46L520-621v101h320v400H120Zm30.77-30.77h658.46v-338.37h-320v-86.71l-200 80v-78.23l-138.46 61v362.31Zm303.08-107.69h52.3v-123.08h-52.3v123.08Zm-160 0h52.3v-123.08h-52.3v123.08Zm320 0h52.3v-123.08h-52.3v123.08ZM840-520H724.62l40-289.23h40L840-520ZM150.77-150.77h658.46-658.46Z" />
  </svg>
);
