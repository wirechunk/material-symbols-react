import type { SVGProps } from "react";
export const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-624v408h528v-408H624v288l-144-72-144 72v-288H216Zm-72 480v-576l96-96h480l96 96v576H144Zm78-552h516l-48-48H270l-48 48Zm186 72v171l72-36 72 36v-171H408Zm-192 0h528-528Z" />
  </svg>
);
