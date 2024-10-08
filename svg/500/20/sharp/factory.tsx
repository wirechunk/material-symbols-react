import type { SVGProps } from "react";
export const SvgFactory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M88.59-88.59v-468.19l278.82-126.46v84.48l192-84.24v123.68h312v470.73H88.59Zm83-83h616.82v-304.76H478.09v-80.15l-192 84v-82.48l-114.5 52.37v331.02ZM440.41-240h79.18v-168h-79.18v168Zm-159.82 0H360v-168h-79.41v168ZM600-240h79.41v-168H600v168Zm271.41-319.41H671.04l48-310.09h103.42l48.95 310.09ZM171.59-171.59h616.82-616.82Z" />
  </svg>
);
