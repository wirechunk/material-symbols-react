import type { SVGProps } from "react";
export const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M111.87-111.87v-736.26h736.26v736.26H111.87Zm91-529.56h554.26v-115.7H202.87v115.7Zm554.26 91H202.87v347.56h554.26v-347.56Zm-554.26-91v91-91Zm0 0v-115.7 115.7Zm0 91v347.56-347.56Z" />
  </svg>
);
