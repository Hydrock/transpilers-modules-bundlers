import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'my_project',
  exposes: {
    '.': './src/components/ProviderComponent.tsx',
    './HelloWorld': './src/components/HelloWorld.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
