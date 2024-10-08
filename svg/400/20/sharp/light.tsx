import type { SVGProps } from "react";
export const SvgLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480.5-144q-61.5 0-103-41T336-288H152q-3-16-5.5-33.89-2.5-17.88-2.5-37.95Q146-482 231.5-569.5T444-671v-145h72v145q128 14 213.5 101.5T816-360q0 19-2 37.5t-5 34.5H624q0 62-41 103t-102.5 41ZM216-360h528q0-98-77.24-169.5-77.23-71.5-186.5-71.5Q371-601 293.5-529.5 216-458 216-360Zm264 144q32 0 52-20t20-52H408q0 32 20 52t52 20Zm0-76Z" />
  </svg>
);
