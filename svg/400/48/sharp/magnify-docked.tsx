import type { SVGProps } from "react";
export const SvgMagnifyDocked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h800v640H80Zm60-149h680v-431H140v431Zm430-96h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Z" />
  </svg>
);
