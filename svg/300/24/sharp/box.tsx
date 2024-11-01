import type { SVGProps } from "react";
export const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-643.85V-200h560v-443.85H620v295.77l-140-70-140 70v-295.77H200ZM140-140v-565.69L234.31-820h491L820-704.92V-140H140Zm75.62-563.84H744L696.54-760H263.08l-47.46 56.16ZM400-643.85v198.08l80-40 80 40v-198.08H400Zm-200 0h560-560Z" />
  </svg>
);
