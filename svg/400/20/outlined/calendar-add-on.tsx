import type { SVGProps } from "react";
export const SvgCalendarAddOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M684-96v-108H576v-72h108v-108h72v108h108v72H756v108h-72Zm-468-96q-29 1-50.5-21T144-264v-432q0-29.7 21.5-50.85Q187-768 216-768h48v-96h72v96h192v-96h72v96h48q29 0 51 21t21 51v216q-18 0-36 3t-36 9v-60H216v264h266q-2 17-1.5 35t4.5 37H216Zm0-408h432v-96H216v96Zm0 0v-96 96Z" />
  </svg>
);
