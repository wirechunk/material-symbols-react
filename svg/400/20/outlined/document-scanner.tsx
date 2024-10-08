import type { SVGProps } from "react";
export const SvgDocumentScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-720v-192h192v72H168v120H96Zm696 0v-120H672v-72h192v192h-72ZM96-48v-192h72v120h120v72H96Zm576 0v-72h120v-120h72v192H672ZM312-264h336v-432H312v432Zm-3 72q-30 0-49.5-21.5T240-264v-432q0-29 19.5-50.5T309-768h342q29 0 49 21.5t20 50.5v432q0 29-20 50.5T651-192H309Zm75-360h192v-72H384v72Zm0 108h192v-72H384v72Zm0 108h192v-72H384v72Zm-72 72v-432 432Z" />
  </svg>
);
