import type { SVGProps } from "react";
export const SvgDisabledByDefault = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m350-292.78 130.19-130.19 130.18 130.19 56.85-56.85-130.19-130.18L667.22-610 610-667.22 479.81-537.03 349.63-667.22l-56.85 56.85 130.19 130.18L292.78-350 350-292.78Zm-127.22 168q-41 0-69.5-28.5t-28.5-69.5v-514.44q0-41 28.5-69.5t69.5-28.5h514.44q41 0 69.5 28.5t28.5 69.5v514.44q0 41-28.5 69.5t-69.5 28.5H222.78Zm0-98h514.44v-514.44H222.78v514.44Zm0-514.44v514.44-514.44Z" />
  </svg>
);
