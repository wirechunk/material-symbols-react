import cp from 'node:child_process';

const weights = [200, 300, 400, 500, 600];

const opticalSizes = [20, 24, 48];

for (const weight of weights) {
  for (const opticalSize of opticalSizes) {
    // await cp.exec('npx');
    const spawn  = cp.spawn('npx', [
      '@material-design-icons/scripts',
      'download',
      'svg',
      '--symbols',
      '--weight',
      weight,
      '--size',
      opticalSize,
      '--to',
      `svg/${weight}/${opticalSize}`,
    ], {
      stdio: 'inherit',
    });
    const {resolve, promise} = Promise.withResolvers();
    spawn.on('exit', resolve);
    await promise;
  }
}
