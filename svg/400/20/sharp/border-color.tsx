import type { SVGProps } from "react";
export const SvgBorderColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96 0v-192h768V0H96Zm168-360h51l279-279-26-27-25-24-279 279v51Zm-72 72v-152.85L645-894l153 153-452.92 453H192Zm503-455-51-49 51 49ZM594-639l-26-27-25-24 51 51Z" />
  </svg>
);
