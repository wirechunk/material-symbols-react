import type { SVGProps } from "react";
export const SvgPictureInPicture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M100-180v-600h760v600H100Zm60-60h640v-480H160v480Zm286.15-206.15H760V-680H446.15v233.85Zm60-60V-620H700v113.85H506.15ZM160-240v-480 480Z" />
  </svg>
);
