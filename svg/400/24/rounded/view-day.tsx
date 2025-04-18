import type { SVGProps } from "react";
export const SvgViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M159-160q-17 0-28-11.5T120-200q0-17 11.5-28.5T160-240h641q17 0 28 11.5t11 28.5q0 17-11.5 28.5T800-160H159Zm0-560q-17 0-28-11.5T120-760q0-17 11.5-28.5T160-800h641q17 0 28 11.5t11 28.5q0 17-11.5 28.5T800-720H159Zm41 400q-33 0-56.5-23.5T120-400v-160q0-33 23.5-56.5T200-640h560q33 0 56.5 23.5T840-560v160q0 33-23.5 56.5T760-320H200Zm0-80h560v-160H200v160Zm0-160v160-160Z" />
  </svg>
);
