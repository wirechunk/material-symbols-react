import type { SVGProps } from "react";
export const SvgTransitionPush = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-192v-72h72v-432h-72v-72h72q33 0 52.5 19.5T480-696v432q0 33-19.5 52.5T408-192h-72Zm288 0q-33 0-52.5-19.5T552-264v-432q0-33 19.5-52.5T624-768h192q33 0 52.5 19.5T888-696v432q0 33-19.5 52.5T816-192H624Zm0-72h192v-432H624v432Zm-432-72-51.3-50.4L198-444H48v-72h150l-57.3-56.7L192-624l144 144-144 144Zm432 72v-432 432Z" />
  </svg>
);
