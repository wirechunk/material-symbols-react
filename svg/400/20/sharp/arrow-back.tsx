import type { SVGProps } from "react";
export const SvgArrowBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" />
  </svg>
);
