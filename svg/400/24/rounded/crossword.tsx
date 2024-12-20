import type { SVGProps } from "react";
export const SvgCrossword = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M400-320v160h160v-160H400Zm-80-80v-160H160v160h160Zm80 0h160v-160H400v160Zm240 0h160v-160H640v160Zm0-240h160v-160H640v160ZM320-320H160q-33 0-56.5-23.5T80-400v-160q0-33 23.5-56.5T160-640h400v-160q0-33 23.5-56.5T640-880h160q33 0 56.5 23.5T880-800v400q0 33-23.5 56.5T800-320H640v160q0 33-23.5 56.5T560-80H400q-33 0-56.5-23.5T320-160v-160Z" />
  </svg>
);
