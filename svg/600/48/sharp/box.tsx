import type { SVGProps } from "react";
export const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M185.09-654.22v469.13h589.82v-469.13h-127v343.13L480-395.04l-167.35 83.95v-343.13H185.09Zm-79.22 548.35v-615.22L208.22-854.7h543.13L854.7-721.09v615.22H105.87ZM211.7-729.48h535.6l-36-46H247.7l-36 46Zm176.21 75.26v221.26L480-479l92.65 46.04v-221.26H387.91Zm-202.82 0H774.91 185.09Z" />
  </svg>
);
