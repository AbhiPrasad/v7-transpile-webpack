const legacy = {
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'auto',
        targets: {
          chrome: '20',
          opera: '12',
          safari: '7',
          ie: '9',
        },
        corejs: { version: '3.8', proposals: true },
        useBuiltIns: 'entry',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  ignore: ['**/*.test.tsx', '**/*.test.ts', '**/__snapshots__', '**/__tests__'],
  plugins: [
    '@babel/plugin-transform-block-scoping',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    'lodash',
    'date-fns'
  ],
};

const modern = {
  ...legacy,
  plugins: 
  [
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    'lodash',
    'date-fns'
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        // Avoid the weight of transpiling for IE while staying off the bleeding edge.
        targets: {
          safari: '10',
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};

module.exports = legacy;
