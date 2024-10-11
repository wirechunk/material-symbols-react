import type { SVGProps } from "react";
export const SvgTableFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M440-320H120v200h320v-200Zm80 0v200h320v-200H520Zm-80-80v-200H120v200h320Zm80 0h320v-200H520v200ZM120-680h720v-160H120v160Z" />
  </svg>
);
