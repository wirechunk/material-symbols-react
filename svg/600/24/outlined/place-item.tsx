import type { SVGProps } from "react";
export const SvgPlaceItem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M195.48-94q-44.31 0-75.16-30.85Q89.48-155.7 89.48-200v-395.48q0-44.3 30.84-75.15 30.85-30.85 75.16-30.85H347v106H195.48V-200h569.04v-395.48H613v-106h151.52q44.31 0 75.16 30.85 30.84 30.85 30.84 75.15V-200q0 44.3-30.84 75.15Q808.83-94 764.52-94H195.48ZM480-288.91 288.91-480 363-554.09l64 63.57V-960h106v469.48l64-63.57L671.09-480 480-288.91Z" />
  </svg>
);
