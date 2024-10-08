import type { SVGProps } from "react";
export const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M135.87-135.87v-688.26h688.26v688.26H135.87Zm83-513.56h522.26v-91.7H218.87v91.7Zm522.26 83H218.87v347.56h522.26v-347.56Zm-522.26-83v83-83Zm0 0v-91.7 91.7Zm0 83v347.56-347.56Z" />
  </svg>
);
