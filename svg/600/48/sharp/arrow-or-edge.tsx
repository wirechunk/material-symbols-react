import type { SVGProps } from "react";
export const SvgArrowOrEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M277.39-105.87 117.82-265.43l55.57-57.7 64.39 64.95v-260.69H23.04V-854.7h79.79v256.61h214.73v339.91l63.83-63.39 55.57 56.14-159.57 159.56Zm404.22 0L521.48-265.43l56.13-57.7L642-258.18v-339.91h215.74V-854.7h79.22v335.83H721.22v260.13l64.39-62.83 55.57 56.14-159.57 159.56Z" />
  </svg>
);
