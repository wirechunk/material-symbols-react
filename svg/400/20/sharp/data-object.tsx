import type { SVGProps } from "react";
export const SvgDataObject = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M576-192v-72h120v-204h96v-24h-96v-204H576v-72h192v206h96v164h-96v206H576Zm-384 0v-206H96v-164h96v-206h192v72H264v204h-96v24h96v204h120v72H192Z" />
  </svg>
);
