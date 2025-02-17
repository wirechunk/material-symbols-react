import type { SVGProps } from "react";
export const SvgScreenshotFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-672v-192h192v72H264v120h-72Zm0 576v-192h72v120h120v72H192Zm504-576v-120H576v-72h192v192h-72ZM576-96v-72h120v-120h72v192H576Z" />
  </svg>
);
