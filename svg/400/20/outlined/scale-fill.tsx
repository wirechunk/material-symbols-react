import type { SVGProps } from "react";
export const SvgScaleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96q0-83 21-151.5T178-368q40-52 98-86.5T408-504v-120q-139-18-224.5-83.5T96-864h768q-2 91-87.5 156.5T552-624v120q74 15 132 49.5t98 86.5q40 52 61 120.5T864-96H624v-72h163q-13-120-99-195.5T480-439q-122 0-207.5 75.5T173-168h163v72H96Zm384 0q-31 0-51.5-20.5T408-168q0-16 5-28.5t16-22.5q18-18 67-41.5T624-312q-35 92-55.5 135T531-117q-10 11-22.5 16T480-96Z" />
  </svg>
);
