import type { SVGProps } from "react";
export const SvgChess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-168h528v-72H216v72Zm110-144h308l-31-168H357l-31 168ZM144-96v-144.25Q144-270 165.15-291T216-312h37l31-168h-92v-72h576v72h-92l31 168h37q29.7 0 50.85 21.15Q816-269.7 816-240v144H144Zm131-456-83-312q34 29 70 56.5t80.56 27.5Q385-780 419-805.5t61-58.5q27 32 61 58t76.44 26Q662-780 698-807.5t70-56.5l-83 312h-75l43-159q-9 2-18.5 2.5t-18.5.5q-36.69 0-71.84-12.5Q509-733 480-757q-29 24-64.14 36.5T344-708q-9 0-18.5-.5T307-711l43 159h-75Zm205 72Zm0-72Zm0 384Z" />
  </svg>
);
