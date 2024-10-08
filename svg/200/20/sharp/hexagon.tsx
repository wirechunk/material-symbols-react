import type { SVGProps } from "react";
export const SvgHexagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M299.54-164 119.08-480l180.46-316h360.92l180.46 316-180.46 316H299.54Zm18.92-32h323.08l162.54-284-162.54-284H318.46L155.92-480l162.54 284ZM480-480Z" />
  </svg>
);
