export default {
  outDir: 'dist',
  jsxRuntime: 'automatic',
  index: false,
  svgo: false,
  filenameCase: 'kebab',
  typescript: true,
  svgProps: {
    fill: 'currentcolor',
  },
  template: (variables, { tpl }) =>
     tpl`
${variables.imports};

${variables.interfaces};

export const ${variables.componentName.slice('Svg'.length)} = (${variables.props}) => (
  ${variables.jsx}
);
`,
}
