import type { SVGProps } from "react";
export const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-384h480v-72H240v72Zm0-132h480v-72H240v72Zm0-132h480v-72H240v72ZM96-240v-624h768v768L720-240H96Zm72-72h582l42 42v-522H168v480Zm0 0v-480 480Z" />
  </svg>
);
