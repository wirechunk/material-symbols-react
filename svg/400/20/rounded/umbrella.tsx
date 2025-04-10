import type { SVGProps } from "react";
export const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m516-350 88-255-48 16-40-41v280Zm-72 0v-280l-40 41-48-16 88 255Zm36 254q-11 0-19.5-6T448-119L264-651q-8-21 8-37t37-9l75 25 60-60v-84q0-40 28-68t68-28q40 0 68 28t28 68q0 15-10.5 25.5T600-780q-15 0-25.5-10.5T564-816q0-10-7-17t-17-7q-10 0-17 7t-7 17v84l60 60 75-25q21-7 37 9t8 37L512-119q-4 11-12.5 17T480-96Z" />
  </svg>
);
