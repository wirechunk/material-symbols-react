import type { SVGProps } from "react";
export const SvgDragPan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-61.52 293.91-247.61 363-316.7l68 68V-431H248.7l68 68-69.09 69.09L61.52-480l186.09-186.09L316.7-597l-68 68H431v-182.3l-68 68-69.09-69.09L480-898.48l186.09 186.09L597-643.3l-68-68V-529h182.3l-68-68 69.09-69.09L898.48-480 712.39-293.91 643.3-363l68-68H529v182.3l68-68 69.09 69.09L480-61.52Z" />
  </svg>
);
