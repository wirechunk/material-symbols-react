import type { SVGProps } from "react";
export const SvgBrokenImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v640H160Zm72.23-257.85 165.85-165.84 164.61 164.61 164.85-164.84 41.69 41.69v-227H190.77v309.92l41.46 41.46Zm-41.46 227.08h578.46V-498l-41.69-41.69-164.85 164.84-164.61-164.61-165.85 165.08-41.46-40.7v224.31Zm0 0V-498v30.77-302 578.46Z" />
  </svg>
);
