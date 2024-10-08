import type { SVGProps } from "react";
export const SvgArrowsOutward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m672-288-51-51 105-105H528v-72h198L621-621l51-51 192 192-192 192Zm-384 0L96-480l192-192 51 51-105 105h198v72H234l105 105-51 51Z" />
  </svg>
);
