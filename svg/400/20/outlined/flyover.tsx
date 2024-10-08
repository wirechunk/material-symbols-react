import type { SVGProps } from "react";
export const SvgFlyover = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-503v-74q94-26 190-36.5T480-624q98 0 194 10.5T864-577v74q-18-5-36-9.5t-36-8.5v113h-72v-127q-60-9-120-12t-120-3q-60 0-120 3t-120 12v127h-72v-113q-18 4-36 8.5T96-503Zm144 359 58-325q17-2 36.5-3.5T371-476l-59 332h-72Zm120-672h72l-22 120q-17 1-36.5 2.5T337-690l23-126Zm84 672h72v-144h-72v144Zm0-216h72v-119h-72v119Zm84-456h72l23 126q-17-2-36.5-3.5T550-696l-22-120Zm120 672-59-332q17 2 36.5 3.5T662-469l58 325h-72Z" />
  </svg>
);
