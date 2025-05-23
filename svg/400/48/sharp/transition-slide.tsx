import type { SVGProps } from "react";
export const SvgTransitionSlide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M40-160v-640h240v640H40Zm60-59h120v-521H100v521Zm260 59v-640h560v640H360Zm60-59h440v-521H420v521Zm-200 0v-521 521Zm200 0v-521 521Z" />
  </svg>
);
