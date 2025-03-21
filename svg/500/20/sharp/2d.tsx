import type { SVGProps } from "react";
export const Svg2D = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M313.91-384h144v-48h-96v-28h96v-116h-144v48h96v28h-96v116ZM135.87-135.87v-688.26h688.26v688.26H135.87Zm83-83h522.26v-522.26H218.87v522.26Zm0 0v-522.26 522.26ZM501.13-384h112.94l31.06-31.07v-129.86L614.07-576H501.13v192Zm48-48v-96h48v96h-48Z" />
  </svg>
);
