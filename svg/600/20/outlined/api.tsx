import type { SVGProps } from "react";
export const SvgApi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-365.91 365.91-480 480-594.09 594.09-480 480-365.91Zm-86-282.22L286.13-756 480-949.87 673.87-756 566-648.13l-86-86-86 86Zm-190 362L10.13-480 204-673.87 311.87-566l-86 86 86 86L204-286.13Zm552 0L648.13-394l86-86-86-86L756-673.87 949.87-480 756-286.13Zm-276 276L286.13-204 394-311.87l86 86 86-86L673.87-204 480-10.13Z" />
  </svg>
);
