import type { SVGProps } from "react";
export const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M222.78-124.78q-40.3 0-69.15-28.85-28.85-28.85-28.85-69.15v-514.44q0-41 28.85-69.5t69.15-28.5h514.44q41 0 69.5 28.5t28.5 69.5v514.44q0 40.3-28.5 69.15-28.5 28.85-69.5 28.85H222.78ZM516-444v221.22h221.22V-444H516Zm0-72h221.22v-221.22H516V-516Zm-72 0v-221.22H222.78V-516H444Zm0 72H222.78v221.22H444V-444Z" />
  </svg>
);
