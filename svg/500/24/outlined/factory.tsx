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
    <path d="M72.59-72.59v-493.19l294.82-125.46v80.48l200-80.24v123.68h320v494.73H72.59Zm91-91h632.82v-312.76H478.09v-80.15l-200 80v-78.48l-114.5 50.37v341.02ZM436.41-240h87.18v-160h-87.18v160Zm-163.82 0H360v-160h-87.41v160ZM600-240h87.41v-160H600v160Zm287.41-327.41H679.04l40-318.09h127.42l40.95 318.09ZM163.59-163.59H796.41 163.59Z" />
  </svg>
);
