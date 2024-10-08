import type { SVGProps } from "react";
export const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M211-144q-29 0-48-19t-19-48v-538q0-30 19-48.5t48-18.5h538q30 0 48.5 18.5T816-749v538q0 29-18.5 48T749-144H211Zm5-504h528v-96H216v96Zm528 72H216v360h528v-360Zm-528-72v72-72Zm0 0v-96 96Zm0 72v360-360Z" />
  </svg>
);
