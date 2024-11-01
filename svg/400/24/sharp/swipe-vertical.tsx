import type { SVGProps } from "react";
export const SvgSwipeVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-80v-60h81q-59-72-90-159T40-480q0-94 31-181t90-159H80v-60h200v200h-60v-116q-58 66-89 147t-31 169q0 88 31 169t89 147v-116h60v200H80Zm224-173 38-83 116-9-126-344 75-28 162 445-100 7 147 68 247-90-97-262 75-28 125 338-355 129-307-143Zm264-139-68-188 75-28 69 188-76 28Zm113-41-55-150 75-28 55 150-75 28Zm5 79Z" />
  </svg>
);
