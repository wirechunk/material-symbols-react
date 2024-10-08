import type { SVGProps } from "react";
export const SvgVerticalShades = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-160v-40h80v-600h560v600h80v40H120Zm120-40h110v-560H240v560Zm150 0h180v-560H390v560Zm220 0h110v-560H610v560Zm-370 0v-560 560Zm480 0v-560 560Z" />
  </svg>
);
