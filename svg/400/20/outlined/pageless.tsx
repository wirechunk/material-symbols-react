import type { SVGProps } from "react";
export const SvgPageless = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M408-96H120q-29.7 0-50.85-21.15Q48-138.3 48-168v-240h72v240h288v72Zm144 0v-72h288v-240h72v240q0 30-21.15 51T840-96H552ZM48-552v-240q0-30 21.15-51T120-864h288v72H120v240H48Zm792 0v-240H552v-72h288q29.7 0 50.85 21.15Q912-821.7 912-792v240h-72Z" />
  </svg>
);
