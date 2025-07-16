module.exports = {
    name: 'provider',
    // remotes: {
    //     provider: 'provider@http://localhost:3001/mf-manifest.json',
    // },
    exposes: {
        './Button': './src/components/Button.tsx',
    },
    shared: {
        react: {
            singleton: true,
        },
        'react-dom': {
            singleton: true,
        },
    },
};
