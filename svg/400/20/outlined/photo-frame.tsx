import type { SVGProps } from "react";
export const SvgPhotoFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M264-192q-10.2 0-17.1-6.9-6.9-6.9-6.9-17.1v-24h-96q-19.8 0-33.9-14.1Q96-268.2 96-288v-432q0-19.8 14.1-33.9Q124.2-768 144-768h672q19.8 0 33.9 14.1Q864-739.8 864-720v432q0 19.8-14.1 33.9Q835.8-240 816-240h-96v23.86q0 10.14-6.9 17.14t-17.1 7H264Zm-120-96h672v-432H144v432Zm96-98h480L566-591 445.89-437.25l-85.78-102.5L240-386Zm-96 98v-432 432Z" />
  </svg>
);
