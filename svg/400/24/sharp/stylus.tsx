import type { SVGProps } from "react";
export const SvgStylus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m358-160-250 52 52-250 198 198Zm0 0L160-358l515-515 198 198-515 515Zm-12-101 414-414-85-85-414 414 85 85Z" />
  </svg>
);
