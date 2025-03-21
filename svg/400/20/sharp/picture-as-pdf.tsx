import type { SVGProps } from "react";
export const SvgPictureAsPdf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M360-456h48v-72h54l18-18v-84l-18-18H360v192Zm48-120v-24h24v24h-24Zm96 120h102l18-18v-156l-18-18H504v192Zm48-48v-96h24v96h-24Zm96 48h48v-72h48v-48h-48v-24h48v-48h-96v192ZM240-240v-624h624v624H240Zm72-72h480v-480H312v480ZM96-96v-624h72v552h552v72H96Zm216-696v480-480Z" />
  </svg>
);
