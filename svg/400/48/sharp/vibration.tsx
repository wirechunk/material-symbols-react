import type { SVGProps } from "react";
export const SvgVibration = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M0-365v-230h60v230H0Zm120 88v-406h60v406h-60Zm780-88v-230h60v230h-60Zm-120 88v-406h60v406h-60ZM240-120v-720h480v720H240Zm60-60h360v-600H300v600Zm0 0v-600 600Z" />
  </svg>
);
