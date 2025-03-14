import type { SVGProps } from "react";
export const SvgFlakyFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96ZM300-525l50-51 51 51 34-34-51-51 51-50-34-35-51 51-50-51-35 35 51 50-51 51 35 34Zm180 357q131 0 221.5-91T792-480q0-60-23-117.5T701-701L259-259q46 46 103.5 68.5T480-168Zm79-106-85-85 34-34 51 51 93-93 34 34-127 127Z" />
  </svg>
);
