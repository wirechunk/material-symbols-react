import type { SVGProps } from "react";
export const SvgVignette = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-322q96.15 0 163.08-46.03Q710-414.06 710-480t-66.92-111.97Q576.15-638 480-638t-163.08 46.03Q250-545.94 250-480t66.92 111.97Q383.85-322 480-322Zm0-52q-73.85 0-125.92-30.88Q302-435.77 302-480q0-44.23 52.08-75.12Q406.15-586 480-586t125.92 30.88Q658-524.23 658-480q0 44.23-52.08 75.12Q553.85-374 480-374ZM116-212v-536h728v536H116Zm52-52h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
