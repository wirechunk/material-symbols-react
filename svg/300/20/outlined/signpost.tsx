import type { SVGProps } from "react";
export const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M454-116v-192H250l-86-98 86-98h204v-72H212v-196h242v-72h52v72h204l86 98-86 98H506v72h242v196H506v192h-52ZM264-628h422.46l42-46-42-46H264v92Zm9.54 268H696v-92H273.54l-42 46 42 46ZM264-628v-92 92Zm432 268v-92 92Z" />
  </svg>
);
