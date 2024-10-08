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
    <path d="M213.87-135.87q-33.78 0-55.89-22.11t-22.11-55.89v-532.26q0-34.78 22.11-56.39t55.89-21.61h532.26q34.78 0 56.39 21.61t21.61 56.39v532.26q0 33.78-21.61 55.89t-56.39 22.11H213.87Zm5-513.56h522.26v-91.7H218.87v91.7Zm522.26 83H218.87v347.56h522.26v-347.56Zm-522.26-83v83-83Zm0 0v-91.7 91.7Zm0 83v347.56-347.56Z" />
  </svg>
);
