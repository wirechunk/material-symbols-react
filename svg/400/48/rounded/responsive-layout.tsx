import type { SVGProps } from "react";
export const SvgResponsiveLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-505h215v-215h505v720H120Zm505-60h155v-600H395v155h230v445Zm-230 0h170v-385H395v385Zm-215 0h155v-385H180v385Zm445-445v60-60Zm-290 60Zm230 0Zm60-60Z" />
  </svg>
);
