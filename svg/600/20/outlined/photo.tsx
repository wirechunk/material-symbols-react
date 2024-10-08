import type { SVGProps } from "react";
export const SvgPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M222.78-124.78q-41 0-69.5-28.85t-28.5-69.15v-514.44q0-40.3 28.5-69.15 28.5-28.85 69.5-28.85h514.44q41 0 69.5 28.85t28.5 69.15v514.44q0 40.3-28.5 69.15-28.5 28.85-69.5 28.85H222.78Zm0-98h514.44v-514.44H222.78v514.44Zm31.61-58.44h451.22L552-491.3l-108 144-72-96-117.61 162.08Zm-31.61 58.44v-514.44 514.44Z" />
  </svg>
);
