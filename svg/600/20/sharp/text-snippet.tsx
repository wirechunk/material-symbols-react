import type { SVGProps } from "react";
export const SvgTextSnippet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M222.78-222.78h514.44v-354L576.78-737.22h-354v514.44Zm-98 98v-710.44h492.74l217.7 217.7v492.74H124.78Zm157-167.74h396.44v-75.96H281.78v75.96Zm0-134.96h396.44V-504H281.78v76.52Zm0-135.52h289.7v-76.52h-289.7V-563Zm-59 340.22v-514.44 514.44Z" />
  </svg>
);
