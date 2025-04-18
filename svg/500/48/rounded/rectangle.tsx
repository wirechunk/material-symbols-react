import type { SVGProps } from "react";
export const SvgRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M142.15-154.02q-28.35 0-48.24-19.89t-19.89-48.24v-515.7q0-28.45 19.89-48.41 19.89-19.96 48.24-19.96h675.7q28.45 0 48.41 19.96 19.96 19.96 19.96 48.41v515.7q0 28.35-19.96 48.24t-48.41 19.89h-675.7Zm0-68.13h675.7v-515.7h-675.7v515.7Zm0 0v-515.7 515.7Z" />
  </svg>
);
