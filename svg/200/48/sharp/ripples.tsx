import type { SVGProps } from "react";
export const SvgRipples = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M190.77-190.77h578.46v-378.69q-19.27 13-41.05 19.77-21.78 6.77-45.26 6.77-58.36 0-99.79-40.98-41.44-40.99-41.44-99.48 0-23.21 6.77-44.72 6.77-21.52 19.77-41.13H190.77v578.46ZM160-160v-640h640v640H160Zm30.77-609.23v578.46-578.46Z" />
  </svg>
);
