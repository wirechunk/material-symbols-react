import type { SVGProps } from "react";
export const SvgContextualToken = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-336h300v-108H240v108Zm360 0h120v-288H600v288ZM240-516h300v-108H240v108Zm-72 252h624v-432H168v432Zm-72 72v-576h768v576H96Zm72-72v-432 432Z" />
  </svg>
);
