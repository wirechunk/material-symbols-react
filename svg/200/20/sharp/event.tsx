import type { SVGProps } from "react";
export const SvgEvent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M591.61-240q-33.3 0-57.07-23.54-23.77-23.55-23.77-56.85t23.54-57.07q23.55-23.77 56.85-23.77t57.07 23.54Q672-354.14 672-320.84t-23.54 57.07Q624.91-240 591.61-240ZM184-136v-592h159.38v-105.23h35.08V-728h206.16v-105.23h32V-728H776v592H184Zm32-32h528v-335.38H216V-168Zm0-367.39h528V-696H216v160.61Zm0 0V-696v160.61Z" />
  </svg>
);
