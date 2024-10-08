import type { SVGProps } from "react";
export const SvgPolymer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-192 48-480l168-288h144L192-480l104 192 280-480h167l169 288-169 288H593l175-288-104-192-280 480H216Z" />
  </svg>
);
