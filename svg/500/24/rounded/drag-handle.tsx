import type { SVGProps } from "react";
export const SvgDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M151.87-349v-91h656.26v91H151.87Zm0-171v-91h656.26v91H151.87Z" />
  </svg>
);
