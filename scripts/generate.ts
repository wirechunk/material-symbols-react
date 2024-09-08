import { spawn } from 'node:child_process';
import { opticalSizes, weights } from './constants.ts';

// Do this mostly serially to avoid errors with too many files being opened concurrently.
for (const weight of weights) {
  for (const opticalSize of opticalSizes) {
    console.log(`Generating weight ${weight} and optical size ${opticalSize}`);
    const npx = spawn('npx', [
      '@svgr/cli',
      '--out-dir',
      `svg/${weight}/${opticalSize}`,
      '--',
      `svg/${weight}/${opticalSize}`,
    ], {
      stdio: 'inherit',
    });
    const { resolve, promise } = Promise.withResolvers();
    npx.on('exit', resolve);
    await promise;
  }
}
