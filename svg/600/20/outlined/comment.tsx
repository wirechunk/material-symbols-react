import type { SVGProps } from "react";
export const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-384h480v-72H240v72Zm0-132h480v-72H240v72Zm0-132h480v-72H240v72ZM883.22-76.78l-144-144H174.78q-41 0-69.5-28.5t-28.5-69.5v-466.44q0-41 28.5-69.5t69.5-28.5h610.44q41 0 69.5 28.5t28.5 69.5v708.44Zm-708.44-242h594.44l16 16.56v-483H174.78v466.44Zm0 0v-466.44 466.44Z" />
  </svg>
);
