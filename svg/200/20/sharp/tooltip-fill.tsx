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
    <path d="m480-136-80.62-124H136v-564h688v564H560.62L480-136Z" />
  </svg>
);
