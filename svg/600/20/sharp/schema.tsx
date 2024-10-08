import type { SVGProps } from "react";
export const SvgSchema = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M170.52-37.52V-288h96v-66.48h-96v-251.04h96V-648h-96v-250.48h293.96V-648h-96v42.48h96V-529h79.04v-76.52h293.96v251.04H543.52V-431h-79.04v76.52h-96V-288h96v250.48H170.52Zm98-98h97.96V-190h-97.96v54.48Zm0-316.96h97.96v-55.04h-97.96v55.04Zm373 0h97.96v-55.04h-97.96v55.04ZM268.52-746h97.96v-54.48h-97.96V-746Zm49.26-27.52Zm0 293.52Zm373 0Zm-373 317.52Z" />
  </svg>
);
