import type { SVGProps } from "react";
export const SvgNearby = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-304 304-480l176-176 176 176-176 176Zm0 255L49-480l431-431 431 431L480-49Zm0-143 288-288-288-288-288 288 288 288Z" />
  </svg>
);
