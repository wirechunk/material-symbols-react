import type { SVGProps } from "react";
export const SvgCaptureFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-336h480v-288H240v288ZM96-192v-576h768v576H96Z" />
  </svg>
);
