import type { SVGProps } from "react";
export const SvgInkMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m322.48-125.91-34-34L233.13-104q-26.09 26.09-64.85 25.81-38.76-.29-65.41-25.81-25.09-27.09-25.59-63.93-.5-36.85 25.59-62.94l57.61-57.61-34.57-34 507.57-508.7q24.96-24.95 59.26-24.95T753-831.18L831.18-753q24.95 23.96 24.95 58.76t-24.95 59.76l-508.7 508.57Zm131-384.96L265.22-322.48l57.26 57.26 189.39-188.26-58.39-57.39Z" />
  </svg>
);
