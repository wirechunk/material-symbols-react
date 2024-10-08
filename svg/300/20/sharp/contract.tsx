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
    <path d="M240-116q-31.92 0-53.96-22.04T164-192v-139.38h96V-844h536v640q0 36.92-25.54 62.46T708-116H240Zm467.79-52q15.21 0 25.71-10.35T744-204v-588H312v460.62h360V-204q0 15.3 10.29 25.65Q692.58-168 707.79-168Zm-340.1-444.31v-52h320.62v52H367.69Zm0 115.39v-52h320.62v52H367.69ZM240-168h380v-111.39H216V-192q0 10.2 6.9 17.1 6.9 6.9 17.1 6.9Zm0 0h-24 404-380Z" />
  </svg>
);
