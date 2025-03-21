import type { SVGProps } from "react";
export const SvgRectangleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-160q-25 0-42.5-17.5T80-220v-520q0-25 17.5-42.5T140-800h680q25 0 42.5 17.5T880-740v520q0 25-17.5 42.5T820-160H140Z" />
  </svg>
);
