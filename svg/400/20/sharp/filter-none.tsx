import type { SVGProps } from "react";
export const SvgFilterNone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-240v-624h624v624H240Zm72-72h480v-480H312v480ZM96-96v-624h72v552h552v72H96Zm216-696v480-480Z" />
  </svg>
);
