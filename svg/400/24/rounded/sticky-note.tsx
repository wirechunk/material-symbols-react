import type { SVGProps } from "react";
export const SvgStickyNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v407q0 16-6 30.5T817-297L663-143q-11 11-25.5 17t-30.5 6H200Zm400-80v-80q0-33 23.5-56.5T680-360h80v-400H200v560h400ZM440-560v200q0 17 11.5 28.5T480-320q17 0 28.5-11.5T520-360v-200h80q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640H360q-17 0-28.5 11.5T320-600q0 17 11.5 28.5T360-560h80Zm160 360Zm-400 0v-560 560Z" />
  </svg>
);
