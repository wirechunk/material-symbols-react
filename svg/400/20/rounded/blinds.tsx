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
    <path d="M192-216v-528q0-29.7 21.16-50.85Q234.32-816 264.04-816h432.24Q726-816 747-794.85T768-744v528h60q15.3 0 25.65 10.29Q864-195.42 864-180.21t-10.35 25.71Q843.3-144 828-144H132q-15.3 0-25.65-10.29Q96-164.58 96-179.79t10.35-25.71Q116.7-216 132-216h60Zm72-444h264v-84H264v84Zm0 144h264v-72H264v72Zm0 300h432v-228h-96v72q11.2 8.25 17.6 20.62Q624-339 624-324.34q0 25-17.6 42.67T563.9-264q-24.9 0-42.4-17.67T504-324.34q0-14.66 6.4-27.04 6.4-12.37 17.6-20.62v-72H264v228Zm336-444h96v-84h-96v84Zm0 144h96v-72h-96v72Z" />
  </svg>
);
