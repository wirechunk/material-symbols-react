import type { SVGProps } from "react";
export const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-768h768v624H240L96-96Zm114-216h582v-480H168v522l42-42Zm-42 0v-480 480Zm72-72h336v-72H240v72Zm0-132h480v-72H240v72Zm0-132h480v-72H240v72Z" />
  </svg>
);
