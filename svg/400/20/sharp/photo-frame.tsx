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
    <path d="M240-192v-48H96v-528h768v528H720v48H240Zm-96-96h672v-432H144v432Zm96-98h480L566-591 445.89-437.25l-85.78-102.5L240-386Zm-96 98v-432 432Z" />
  </svg>
);
