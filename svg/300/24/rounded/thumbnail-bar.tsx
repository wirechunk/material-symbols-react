import type { SVGProps } from "react";
export const SvgThumbnailBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M172.31-180q-29.92 0-51.12-21.19Q100-222.39 100-252.31v-455.38q0-29.92 21.19-51.12Q142.39-780 172.31-780h615.38q29.92 0 51.12 21.19Q860-737.61 860-707.69v455.38q0 29.92-21.19 51.12Q817.61-180 787.69-180H172.31ZM380-240h407.69q5.39 0 8.85-3.46t3.46-8.85v-455.38q0-5.39-3.46-8.85t-8.85-3.46H380v480Zm-60 0v-480H172.31q-5.39 0-8.85 3.46t-3.46 8.85v455.38q0 5.39 3.46 8.85t8.85 3.46H320Zm-160 0v-480 480Zm160 0h60-60Zm0-480h60-60Z" />
  </svg>
);
