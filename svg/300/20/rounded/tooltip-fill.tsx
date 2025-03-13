import type { SVGProps } from "react";
export const SvgTooltipFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m480-116-88.31-134H180.31q-26.53 0-45.42-18.89T116-314.31v-465.38q0-26.53 18.89-45.42T180.31-844h599.38q26.53 0 45.42 18.89T844-779.69v465.38q0 26.53-18.89 45.42T779.69-250H568.31L480-116Z" />
  </svg>
);
