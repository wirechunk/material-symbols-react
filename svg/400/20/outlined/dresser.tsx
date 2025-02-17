import type { SVGProps } from "react";
export const SvgDresser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-144v-600q0-29.7 21.16-50.85Q234.32-816 264.04-816h432.24Q726-816 747-794.85T768-744v600h-72v-72H264v72h-72Zm72-372h180v-228H264v228Zm252-144h180v-84H516v84Zm0 144h180v-72H516v72ZM405-324h149v-72H405v72ZM264-444v156h432v-156H264Zm0 0v156-156Z" />
  </svg>
);
