import type { SVGProps } from "react";
export const SvgEditAttributes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M287.72-288Q208-288 152-344.23q-56-56.22-56-136Q96-560 152.19-616q56.18-56 135.9-56h384.19Q752-672 808-615.77q56 56.22 56 136Q864-400 807.81-344q-56.18 56-135.9 56H287.72Zm.28-72h384q50 0 85-35t35-85q0-50-35-85t-85-35H288q-50 0-85 35t-35 85q0 50 35 85t85 35Zm66-57 90-91q8-8 8.5-20.5T445-549q-8-8-20.5-8t-20.5 8l-76 76-19-19q-8-8-20-8t-20 8q-8 8-8 20t8 20l34 34q11 11 25.5 11.5T354-417Zm126-63Z" />
  </svg>
);
