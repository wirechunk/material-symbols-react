import type { SVGProps } from "react";
export const SvgToast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M270.78-270.78h418.44v-72H270.78v72Zm-48 146q-41 0-69.5-28.5t-28.5-69.5v-514.44q0-41 28.5-69.5t69.5-28.5h514.44q41 0 69.5 28.5t28.5 69.5v514.44q0 41-28.5 69.5t-69.5 28.5H222.78Zm0-98h514.44v-514.44H222.78v514.44Zm0-514.44v514.44-514.44Z" />
  </svg>
);
