import type { SVGProps } from "react";
export const SvgChildFriendly = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M348-96q-25 0-42.5-17.5T288-156q0-25 17.5-42.5T348-216q25 0 42.5 17.5T408-156q0 25-17.5 42.5T348-96Zm408 0q-25 0-42.5-17.5T696-156q0-25 17.5-42.5T756-216q25 0 42.5 17.5T816-156q0 25-17.5 42.5T756-96ZM565-661 422-836q31-14 63.5-21t66.5-7q45 0 88.5 10.5T719-815L565-661Zm-85 421q-80 0-136-56t-56-136v-341l-6-5q-9-8-20-11t-22-3q-30 0-51 21t-21 51H96q0-60 42-102t102-42q26 0 54 11t48 34l415 500q20 23 6.5 51T720-240H480Zm0-72h189L360-684v252q0 50 35 85t85 35Zm11-174Z" />
  </svg>
);
