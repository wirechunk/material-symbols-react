import type { SVGProps } from "react";
export const SvgVolcano = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M84.52-81.41 235.22-432h143.76l48-192H725.5L873.8-81.41H84.52ZM205-160.59h564l-104-384H488l-48 192H288l-83 192ZM540-768v-151.41h79.41V-768H540Zm173.09 68.67-56.02-56.26 107.02-107.02 56.26 56.02-107.26 107.26Zm-267 0L340.07-806.59l55.02-56.02 107.26 107.02-56.26 56.26ZM769-160.59H205h564Z" />
  </svg>
);
