const { createModuleFederationConfig } = require('@module-federation/enhanced');

module.exports = createModuleFederationConfig({
    name: 'host',
    manifest: {
        fileName: 'mf-manifest2.json',
    },
    remotes: {
        provider: 'provider@http://localhost:3001/mf-manifest.json',
    },
    dev: {
        disableLiveReload: true,
        disableHotTypesReload: true,
        disableDynamicRemoteTypeHints: true,
    }
})

// module.exports = {
//     name: 'host',
//     manifest: {
//         fileName: 'mf-manifest2.json',
//     },
//     remotes: {
//         provider: 'provider@http://localhost:3001/mf-manifest.json',
//     },
//     dev: {
//         disableLiveReload: true,
//         disableHotTypesReload: true,
//         disableDynamicRemoteTypeHints: true,
//     }
//     // exposes: {
//     //     './Button': './src/components/Button.tsx',
//     // },
//     // shared: {
//     //     react: {
//     //         singleton: true,
//     //     },
//     //     'react-dom': {
//     //         singleton: true,
//     //     },
//     // },
// };
