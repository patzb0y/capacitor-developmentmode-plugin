import typescript from 'rollup-plugin-typescript2'; 
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
  external: ['@capacitor/core',/\.css$/],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',  // Point to your tsconfig.json file
      declaration: true,  // Generate declaration files (.d.ts)
      declarationDir: './dist',  // Output directory for .d.ts files
      exclude: ['node_modules/**'],  // Exclude node_modules from TypeScript processing
      useTsconfigDeclarationDir: true, // Use the directory specified in tsconfig.json for declarations
    }),
  ],
};
