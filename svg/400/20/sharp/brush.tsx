import type { SVGProps } from "react";
export const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M247-139q-45 0-84.5-20.5T96-215q31-2 53-23t22-52q0-48 33.15-80.5 33.14-32.5 80.5-32.5 47.35 0 79.85 32.96Q397-337.08 397-290q0 63-43.5 107T247-139Zm0-67q34.65 0 59.33-24.68Q331-255.35 331-290q0-19-13.5-32.5T285-336q-19 0-32.5 13.5T239-290q0 22-5 42.5T215-211q8 2 16 3.5t16 1.5Zm236-170L381-478l353-353 102 101-353 354Zm-199 86Z" />
  </svg>
);
