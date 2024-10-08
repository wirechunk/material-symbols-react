import type { SVGProps } from "react";
export const SvgCandlestickChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M320-200v-84.62h-80v-390.76h80V-760h30.77v84.62h80v390.76h-80V-200H320Zm-49.23-115.38H400v-329.24H270.77v329.24ZM609.23-200v-189.23h-80v-213.85h80V-760H640v156.92h80v213.85h-80V-200h-30.77ZM560-420h129.23v-152.31H560V-420Zm-224.62-60Zm289.24-16.15Z" />
  </svg>
);
