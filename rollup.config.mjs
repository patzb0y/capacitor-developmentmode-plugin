export default {
  input: 'src/index.ts',  // Point to the source file, not the built file
  output: [
    {
      file: 'dist/plugin.js',
      format: 'iife',
      name: 'capacitordevelopmentmodeplugin',
      globals: {
        '@capacitor/core': 'capacitorExports',
      },
      sourcemap: true,
      inlineDynamicImports: true,
    },
    {
      file: 'dist/plugin.cjs.js',
      format: 'cjs',
      sourcemap: true,
      inlineDynamicImports: true,
    },
    {
      file: 'dist/esm/index.js',  // Add the ESM output here
      format: 'esm',
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
  external: ['@capacitor/core'],
};
