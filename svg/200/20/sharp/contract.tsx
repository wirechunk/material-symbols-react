import type { SVGProps } from "react";
export const SvgContract = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-136q-23.85 0-39.92-16.08Q184-168.15 184-192v-134.77h96V-824h496v620q0 28.85-19.58 48.42Q736.85-136 708-136H240Zm467.79-32q15.21 0 25.71-10.35T744-204v-588H312v465.23h360V-204q0 15.3 10.29 25.65Q692.58-168 707.79-168ZM375.38-624.62v-32h305.24v32H375.38Zm0 110.77v-32h305.24v32H375.38ZM240-168h400v-126.77H216V-192q0 10.2 6.9 17.1 6.9 6.9 17.1 6.9Zm0 0h-24 424-400Z" />
  </svg>
);
