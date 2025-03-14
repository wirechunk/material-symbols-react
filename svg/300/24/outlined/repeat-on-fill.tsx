import type { SVGProps } from "react";
export const SvgRepeatOnFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-60q-24.92 0-42.46-17.54T60-120v-720q0-24.92 17.54-42.46T120-900h720q24.92 0 42.46 17.54T900-840v720q0 24.92-17.54 42.46T840-60H120Zm166.15-40 42.16-43.39-72.77-72.77h490.61v-219.99h-60v160H255.54l72.77-72.77-42.16-43.39L140-246.15 286.15-100Zm-72.3-423.85h60v-160h430.61l-72.77 72.77 42.16 43.39L820-713.85 673.85-860l-42.16 43.39 72.77 72.77H213.85v219.99Z" />
  </svg>
);
