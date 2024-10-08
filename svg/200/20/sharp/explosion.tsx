import type { SVGProps } from "react";
export const SvgExplosion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m480-323.08 46.12-46.12h64.68v-64.68L636.92-480l-46.12-46.12v-64.68h-64.68L480-636.92l-46.12 46.12H369.2v64.68L323.08-480l46.12 46.12v64.68h64.68L480-323.08Zm0 195.7L376.75-232H232v-144.75L127.38-480 232-583.25V-728h144.75L480-832.62 583.25-728H728v144.75L832.62-480 728-376.75V-232H583.25L480-127.38Zm0-46.62 90-90h126v-126l90-90-90-90v-126H570l-90-90-90 90H264v126l-90 90 90 90v126h126l90 90Zm0-306Z" />
  </svg>
);
