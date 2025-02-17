import type { SVGProps } from "react";
export const SvgCurtains = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-144v-72h96v-600h576v600h96v72H96Zm168-72h154q-8-77-45-142.5T264-442v226Zm0-528v226q72-18 109-83.5T418-744H264Zm88 264q51 34 82 85.5T480-283q15-60 46-111.5t82-85.5q-51-33-82-84.5T480-676q-16 60-46.5 111.5T352-480Zm344-264H542q9 77 45.5 142.5T696-518v-226Zm0 528v-226q-72 18-108.5 83.5T542-216h154ZM264-744v226-226Zm432 0v226-226Zm0 528v-226 226Zm-432 0v-226 226Z" />
  </svg>
);
