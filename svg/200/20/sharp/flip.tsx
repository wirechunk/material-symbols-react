import type { SVGProps } from "react";
export const SvgFlip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M597.08-734.77V-776h41.23v41.23h-41.23Zm0 550.77v-41.23h41.23V-184h-41.23Zm137.69-550.77V-776H776v41.23h-41.23Zm0 550.77v-41.23H776V-184h-41.23Zm0-137.69v-41.23H776v41.23h-41.23Zm0-137.69v-41.24H776v41.24h-41.23Zm0-137.7v-41.23H776v41.23h-41.23ZM381.92-184H184v-592h197.92v32H216v528h165.92v32ZM464-48v-848.62h32V-48h-32Z" />
  </svg>
);
