import type { SVGProps } from "react";
export const SvgStrategy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-528 96-612v-168l144-84 144 84v168l-144 84Zm0-84 72-41v-84.67L240-780l-72 41v86l72 41Zm420 95v-83l156 90v276L576-96 336-234v-276l156-90v83l-84 49v192l168 97 168-97v-192l-84-49Zm-120 85v-432h324l-75 108 75 108H612v216h-72Zm36 84ZM240-696Z" />
  </svg>
);
