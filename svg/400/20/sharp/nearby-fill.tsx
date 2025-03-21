import type { SVGProps } from "react";
export const SvgNearbyFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-312 312-480l168-168 168 168-168 168Zm0 246L66-480l414-414 414 414L480-66Zm0-136 278-278-278-278-278 278 278 278Z" />
  </svg>
);
