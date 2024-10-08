import type { SVGProps } from "react";
export const SvgMarkAsUnread = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-288v-432l312-144 363 168H600l-192-89-240 111v386H96Zm144 144v-480h624v480H240Zm312-192L312-469v253h480v-253L552-336Zm0-83 240-133H312l240 133Zm240-133H312h480Z" />
  </svg>
);
