import type { SVGProps } from "react";
export const SvgLandslide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96h768L624-384l-192-96-96-144H96v528Zm72-72v-68l69 35 349-116 124 149H168Zm75-111-75-37v-88l69 35 158-49 106 53-258 86Zm477-105 192-96v-144l-192-48-96 72v120l96 96Zm-477-63-75-37v-68h130l49 73-104 32Zm491-25-38-38v-54l40-30 104 26v43l-106 53ZM480-624l192-96v-192l-192-48-144 96v144l144 96Zm5-84-77-50v-68l85-57 107 27v91l-115 57Z" />
  </svg>
);
