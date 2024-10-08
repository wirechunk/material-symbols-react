import type { SVGProps } from "react";
export const SvgGridView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M114.02-510v-336.22H450V-510H114.02Zm0 395.98V-450H450v335.98H114.02ZM510-510v-336.22h336.22V-510H510Zm0 395.98V-450h336.22v335.98H510ZM182.15-578.37h199.72v-199.48H182.15v199.48Zm396.22 0h199.48v-199.48H578.37v199.48Zm0 396.22h199.48v-199.72H578.37v199.72Zm-396.22 0h199.72v-199.72H182.15v199.72Zm396.22-396.22Zm0 196.5Zm-196.5 0Zm0-196.5Z" />
  </svg>
);
