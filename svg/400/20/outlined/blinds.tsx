import type { SVGProps } from "react";
export const SvgBlinds = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-144v-72h96v-600h576v600h96v72H96Zm168-516h264v-84H264v84Zm0 144h264v-72H264v72Zm0 300h432v-228h-96v72q11.2 8.25 17.6 20.62Q624-339 624-324.34q0 25-17.6 42.67T563.9-264q-24.9 0-42.4-17.67T504-324.34q0-14.66 6.4-27.04 6.4-12.37 17.6-20.62v-72H264v228Zm336-444h96v-84h-96v84Zm0 144h96v-72h-96v72Z" />
  </svg>
);
