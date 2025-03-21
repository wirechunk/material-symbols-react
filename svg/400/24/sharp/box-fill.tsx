import type { SVGProps } from "react";
export const SvgBoxFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-608l92-112h536l92 112v608H120Zm96-600h528l-34-40H250l-34 40Zm104 400 160-80 160 80v-320H320v320Z" />
  </svg>
);
