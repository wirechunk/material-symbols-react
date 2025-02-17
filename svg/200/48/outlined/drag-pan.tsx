import type { SVGProps } from "react";
export const SvgDragPan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-107.69 340.85-246.85l22.46-22.46L464.62-168v-296.62H168l98.62 99.39-22.47 21.69L107.69-480l137.46-137.46L267.62-595 168-495.38h296.62V-792L366-693.38l-22.46-22.47L480-852.31l136.46 136.46L594-693.38 495.38-792v296.62H792l-98.62-99.39 22.47-21.69L852.31-480 715.85-343.54 693.38-366 792-464.62H495.38V-168l101.31-101.31 22.46 22.46L480-107.69Z" />
  </svg>
);
