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
    <path d="M168-168q-29.7 0-50.85-20.5Q96-209 96-240v-479q0-30.11 21.15-51.56Q138.3-792 168-792h624q29.7 0 50.85 21.44Q864-749.11 864-719v479q0 31-21.15 51.5T792-168H168Zm528-440h96v-112h-96v112Zm0 184h96v-112h-96v112ZM168-240h456v-480H168v480Zm528 0h96v-112h-96v112Z" />
  </svg>
);
