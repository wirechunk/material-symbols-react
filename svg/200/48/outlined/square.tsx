import type { SVGProps } from "react";
export const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v640H160Zm30.77-30.77h578.46v-578.46H190.77v578.46Zm0 0v-578.46 578.46Z" />
  </svg>
);
