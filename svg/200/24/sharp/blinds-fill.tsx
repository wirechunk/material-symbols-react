import type { SVGProps } from "react";
export const SvgBlindsFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-160v-40h80v-600h560v600h80v40H120Zm120-490h330v-110H240v110Zm0 150h330v-110H240v110Zm0 300h480v-260H610v89.92q11.69 6.16 18.54 16.54 6.84 10.39 6.84 23.54 0 18.8-13.33 32.09-13.33 13.29-32.19 13.29t-32.05-13.29Q544.62-311.2 544.62-330q0-13.15 6.84-23.54 6.85-10.38 18.54-16.54V-460H240v260Zm370-450h110v-110H610v110Zm0 150h110v-110H610v110Z" />
  </svg>
);
