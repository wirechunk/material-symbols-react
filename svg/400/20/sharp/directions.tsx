import type { SVGProps } from "react";
export const SvgDirections = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-384h72v-96h120v84l120-120-120-120v84H336v168ZM480-66 66-480l414-414 414 414L480-66Zm0-102 312-312-312-312-312 312 312 312Zm0-312Z" />
  </svg>
);
