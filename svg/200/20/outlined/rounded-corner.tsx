import type { SVGProps } from "react";
export const SvgRoundedCorner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M184-184v-41.23h41.23V-184H184Zm0-137.69v-41.23h41.23v41.23H184Zm0-137.69v-41.24h41.23v41.24H184Zm0-137.7v-41.23h41.23v41.23H184Zm0-137.69V-776h41.23v41.23H184ZM321.69-184v-41.23h41.23V-184h-41.23Zm0-550.77V-776h41.23v41.23h-41.23ZM459.38-184v-41.23h41.24V-184h-41.24Zm137.7 0v-41.23h41.23V-184h-41.23Zm137.69 0v-41.23H776V-184h-41.23Zm0-137.69v-41.23H776v41.23h-41.23ZM776-455.38h-32v-162.31q0-52.63-36.84-89.47Q670.32-744 617.69-744H459.38v-32h158.31q67.23 0 112.77 45.54Q776-684.92 776-617.69v162.31Z" />
  </svg>
);
