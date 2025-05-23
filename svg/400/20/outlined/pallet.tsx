import type { SVGProps } from "react";
export const SvgPallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-144h768v144h-96v-72H528v72h-96v-72H192v72H96Zm156-240q-15.3 0-25.65-10.35Q216-356.7 216-372v-456q0-15.3 10.35-25.65Q236.7-864 252-864h456q15.3 0 25.65 10.35Q744-843.3 744-828v468q0 10.2-6.9 17.1-6.9 6.9-17.1 6.9H252Zm36-72h384v-384H288v384Zm72-240h240v-72H360v72Zm-72 240v-384 384Z" />
  </svg>
);
