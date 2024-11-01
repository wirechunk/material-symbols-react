import type { SVGProps } from "react";
export const SvgBlender = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M264-96v-192l75-78-27-162H144v-288h240v-48h192v48h120l-75 450 75 78v192H264Zm36-504-24-144h-60v144h84Zm179.79 384q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM408-384h144l60-360H348l60 360Zm-72 216h288v-91l-51-53H387l-51 53v91Zm144-72Z" />
  </svg>
);
