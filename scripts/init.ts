import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { weights } from './constants.ts';

export const buildPackage = async () => {
  const rootDir = path.resolve('.');
  const { version } = JSON.parse(
    await readFile(path.resolve(rootDir, 'package.json'), 'utf8'),
  );
  const templateDir = path.resolve(rootDir, 'pkg-template');
  const files = await readdir(templateDir, { withFileTypes: true });
  for (const file of files) {
    if (!file.isFile() || !isAlphaNumeric(file.name[0])) {
      continue;
    }
    const templateFile = path.resolve(templateDir, file.name);
    const template = await readFile(templateFile, 'utf8');
    for (const weight of weights) {
      const packageFile = path.resolve(rootDir, 'svg', weight.toString(), file.name);
      const content = getContent(template, { weight, version });
      await writeFile(packageFile, content);
    }
  }
};

const getContent = (template: string, vars: Record<string, string | number>) => {
  for (const [name, value] of Object.entries(vars)) {
    template = template.replaceAll(`{{${name}}}`, value);
  }
  return template;
};

const isAlphaNumeric = (s) => s.match(/[a-z0-9]/i);

await buildPackage();
