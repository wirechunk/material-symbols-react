import type { SVGProps } from "react";
export const SvgHexagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M272-120 64-480l208-360h416l208 360-208 360H272Zm34-60h348l172-300-172-300H306L133-480l173 300Zm174-300Z" />
  </svg>
);
