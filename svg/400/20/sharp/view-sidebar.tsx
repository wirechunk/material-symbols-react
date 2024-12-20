import type { SVGProps } from "react";
export const SvgViewSidebar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-168v-624h768v624H96Zm600-440h96v-112h-96v112Zm0 184h96v-112h-96v112ZM168-240h456v-480H168v480Zm528 0h96v-112h-96v112Z" />
  </svg>
);
