import type { SVGProps } from "react";
export const SvgStackedInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M280-280q-33 0-56.5-23.5T200-360v-400q0-33 23.5-56.5T280-840h560q33 0 56.5 23.5T920-760v400q0 33-23.5 56.5T840-280H280Zm0-200v120h560v-120H698q-21 36-57 58t-81 22q-45 0-81-22t-57-58H280Zm280 0q26 0 47-15.5t29-39.5q2-11 10-18t19-7h175v-200H280v200h175q11 0 19 7t10 18q8 24 29 39.5t47 15.5ZM120-120q-33 0-56.5-23.5T40-200v-440q0-17 11.5-28.5T80-680q17 0 28.5 11.5T120-640v440h600q17 0 28.5 11.5T760-160q0 17-11.5 28.5T720-120H120Zm160-240h560-560Z" />
  </svg>
);
