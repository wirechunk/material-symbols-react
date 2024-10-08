import type { SVGProps } from "react";
export const SvgStylus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m365-181-232 48 48-233 184 185Zm0 0L181-366l480-480 185 184-481 481Zm-12-90 391-390-83-83-390 391 82 82Z" />
  </svg>
);
