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
    <path d="m480-87.87-99.59-148.54H87.87v-635.72h784.26v635.72H579.35L480-87.87Z" />
  </svg>
);
