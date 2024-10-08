import type { SVGProps } from "react";
export const SvgMediaLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-190v-196l156 98-156 98Zm228-386q-45 0-76.5-31.5T408-684q0-45 31.5-76.5T516-792h60v48h-60q-25 0-42.5 17.5T456-684q0 25 17.5 42.5T516-624h60v48h-60Zm108 0v-48h60q25 0 42.5-17.5T744-684q0-25-17.5-42.5T684-744h-60v-48h60q45 0 76.5 31.5T792-684q0 45-31.5 76.5T684-576h-60Zm-96-84v-48h144v48H528Zm112 252v-72h200v-360H360v360h-72v-432h624v504H640ZM48-48v-480h624v480H48Zm72-72h480v-336H120v336Zm480-540ZM360-288Z" />
  </svg>
);
