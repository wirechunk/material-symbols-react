import type { SVGProps } from "react";
export const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M660-260v-600H301v600h359ZM479-720q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9ZM301-260v-600 600Zm419-600v106q15 2 23.5 14.58T752-711v54q0 16.23-8.5 29.11Q735-615 720-613v353q0 24.75-17.62 42.37Q684.75-200 660-200H301q-24.75 0-42.37-17.63Q241-235.25 241-260v-600q0-24.75 17.63-42.38Q276.25-920 301-920h359q24.75 0 42.38 17.62Q720-884.75 720-860ZM320-50v-60h320v60H320Z" />
  </svg>
);
