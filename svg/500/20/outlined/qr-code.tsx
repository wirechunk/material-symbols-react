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
    <path d="M133-528v-299h299v299H133Zm83-83h133v-133H216v133Zm-83 478v-299h299v299H133Zm83-83h133v-133H216v133Zm312-312v-299h299v299H528Zm83-83h133v-133H611v133Zm141.37 478v-74.87H827V-133h-74.63ZM528-357.37V-432h74.87v74.63H528Zm74.87 74.87v-74.87h74.63v74.87h-74.63ZM528-207.87v-74.63h74.87v74.63H528ZM602.87-133v-74.87h74.63V-133h-74.63Zm74.63-74.87v-74.63h74.87v74.63H677.5Zm0-149.5V-432h74.87v74.63H677.5Zm74.87 74.87v-74.87H827v74.87h-74.63Z" />
  </svg>
);
