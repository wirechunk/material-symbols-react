import type { SVGProps } from "react";
export const SvgNavigation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-264 257-163q-11 5-21.5 3T217-170q-8-8-10.5-18t2.5-21l238-575q5-11 13.5-16.5T480-806q11 0 19.5 5.5T513-784l238 575q5 11 2.5 21T743-170q-8 8-18.5 10t-21.5-3L480-264Zm-169-2 169-77 169 77-169-410-169 410Zm169-77Z" />
  </svg>
);
