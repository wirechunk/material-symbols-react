import type { SVGProps } from "react";
export const SvgOutputCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-96 288-288l51-51 105 105v-390h72v390l105-105 51 51L480-96ZM163-264q-33-48-50-103T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 58-17.5 113T797-264l-51-52q23-38 34.5-79t11.5-85q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 44 11.5 85.5T214-316l-51 52Z" />
  </svg>
);
