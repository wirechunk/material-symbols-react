import type { SVGProps } from "react";
export const SvgPlaceItem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M211.48-118q-41.01 0-69.51-28.5-28.49-28.5-28.49-69.5v-379.48q0-41 28.49-69.5 28.5-28.5 69.51-28.5H359v98H211.48V-216h537.04v-379.48H601v-98h147.52q41.01 0 69.51 28.5 28.49 28.5 28.49 69.5V-216q0 41-28.49 69.5-28.5 28.5-69.51 28.5H211.48ZM480-304.91 304.91-480 374-549.09l57 57.57V-912h98v420.48l57-57.57L655.09-480 480-304.91Z" />
  </svg>
);
