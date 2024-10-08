import type { SVGProps } from "react";
export const SvgTabInactive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-96v-144H96v-168h72v96h72v-408h408v-72h-96v-72h168v144h144v624H240Zm72-72h480v-480H312v480Zm0 0v-480 480ZM96-480v-144h72v144H96Zm0-216v-168h168v72h-96v96H96Zm240-96v-72h144v72H336Z" />
  </svg>
);
