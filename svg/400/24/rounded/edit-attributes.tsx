import type { SVGProps } from "react";
export const SvgEditAttributes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M280-280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h400q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H280Zm0-80h400q50 0 85-35t35-85q0-50-35-85t-85-35H280q-50 0-85 35t-35 85q0 50 35 85t85 35Zm70-56 93-93q9-9 9-21t-9-21q-9-9-21-9t-21 9l-79 79-19-19q-9-9-21-9t-21 9q-9 9-9 21t9 21l33 33q12 12 28 12t28-12Zm130-64Z" />
  </svg>
);
