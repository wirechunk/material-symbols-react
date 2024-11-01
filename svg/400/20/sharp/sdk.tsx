import type { SVGProps } from "react";
export const SvgSdk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-576l96-96h480l96 96v576H144Zm78-552h516l-48-48H270l-48 48Zm-6 480h528v-408H216v408Zm390-204-82 83 51 50 133-133-133-133-51 50 82 83Zm-252 0 82-83-51-50-133 133 133 133 51-50-82-83ZM216-216v-408 408Z" />
  </svg>
);
