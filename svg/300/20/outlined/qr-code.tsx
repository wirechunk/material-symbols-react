import type { SVGProps } from "react";
export const SvgQrCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M164-528v-268h268v268H164Zm52-52h164v-164H216v164Zm-52 416v-268h268v268H164Zm52-52h164v-164H216v164Zm312-312v-268h268v268H528Zm52-52h164v-164H580v164Zm149 416v-67h67v67h-67ZM528-365v-67h67v67h-67Zm67 67v-67h67v67h-67Zm-67 67v-67h67v67h-67Zm67 67v-67h67v67h-67Zm67-67v-67h67v67h-67Zm0-134v-67h67v67h-67Zm67 67v-67h67v67h-67Z" />
  </svg>
);
