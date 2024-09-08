import type { SVGProps } from "react";
export const SvgWidthWide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h800v640H80Zm60-60h110v-520H140v520Zm170 0h340v-520H310v520Zm400 0h110v-520H710v520ZM310-740v520-520Z" />
  </svg>
);
