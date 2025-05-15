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
    <path d="M640-280v-560H320v560h320ZM480-720q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720ZM320-280v-560 560Zm400-560v82q17 3 28.5 16.5T760-711v62q0 17-11.5 30.5T720-602v322q0 33-23.5 56.5T640-200H320q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h320q33 0 56.5 23.5T720-840ZM320-40v-80h320v80H320Z" />
  </svg>
);
