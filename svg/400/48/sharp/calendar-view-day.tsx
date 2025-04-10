import type { SVGProps } from "react";
export const SvgCalendarViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-60h720v60H120Zm0-163v-394h720v394H120Zm60-60h600v-274H180v274Zm-60-437v-60h720v60H120Zm60 437v-274 274Z" />
  </svg>
);
