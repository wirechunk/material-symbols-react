import type { SVGProps } from "react";
export const SvgSliders = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M136-400v-160h688v160H136Zm440-32h216v-96H576v96Z" />
  </svg>
);
