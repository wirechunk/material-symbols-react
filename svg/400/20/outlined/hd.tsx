import type { SVGProps } from "react";
export const SvgHd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-384h48v-72h48v72h48v-192h-48v72h-48v-72h-48v192Zm240 0h96q20.4 0 34.2-13.8Q672-411.6 672-432v-96q0-20.4-13.8-34.2Q644.4-576 624-576h-96v192Zm48-48v-96h48v96h-48ZM168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm0-72h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
