import type { SVGProps } from "react";
export const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M340-99.23v-40h280v40H340ZM647.69-280v-560H312.31v560h335.38Zm-166.1-427.69q13.1 0 21.91-8.86 8.81-8.87 8.81-21.97t-8.86-21.9q-8.87-8.81-21.97-8.81t-21.9 8.86q-8.81 8.86-8.81 21.96 0 13.1 8.86 21.91t21.96 8.81ZM312.31-840v560-560Zm-40 600v-640h415.38v148.92h29.23v116h-29.23V-240H272.31Z" />
  </svg>
);
