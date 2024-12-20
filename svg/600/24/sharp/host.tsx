import type { SVGProps } from "react";
export const SvgHost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M60.78-100.78v-758.44H451.3v758.44H60.78Zm447.92 0v-758.44h390.52v758.44H508.7ZM161.13-201.13h189.83v-557.74H161.13v557.74Zm447.91 0h189.83v-557.74H609.04v557.74ZM201.13-326.09h109.83v-94.69H201.13v94.69Zm447.91 0h109.83v-94.69H649.04v94.69ZM201.13-460.78h109.83v-94.7H201.13v94.7Zm447.91 0h109.83v-94.7H649.04v94.7Zm-447.91-134.7h109.83v-94.69H201.13v94.69Zm447.91 0h109.83v-94.69H649.04v94.69ZM161.13-201.13h189.83-189.83Zm447.91 0h189.83-189.83Z" />
  </svg>
);
