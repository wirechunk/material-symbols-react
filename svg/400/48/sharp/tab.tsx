import type { SVGProps } from "react";
export const SvgTab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-220h680v-347H524v-173H140v520Zm-60 60v-640h800v640H80Zm60-60v-520 520Z" />
  </svg>
);
