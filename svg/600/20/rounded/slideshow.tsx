import type { SVGProps } from "react";
export const SvgSlideshow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M623.43-459.35q10.83-7.05 10.83-20.83 0-13.78-10.83-20.47L417.65-631.7q-12.39-7.69-25.28-.6-12.89 7.08-12.89 21.26v261.77q0 14.99 12.89 21.82 12.89 6.84 25.28-.85l205.78-131.05ZM222.78-124.78q-41 0-69.5-28.5t-28.5-69.5v-514.44q0-41 28.5-69.5t69.5-28.5h514.44q41 0 69.5 28.5t28.5 69.5v514.44q0 41-28.5 69.5t-69.5 28.5H222.78Zm0-98h514.44v-514.44H222.78v514.44Zm0-514.44v514.44-514.44Z" />
  </svg>
);
