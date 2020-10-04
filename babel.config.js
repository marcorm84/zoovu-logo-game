module.exports = {
  presets: [['@babel/env', { loose: true, modules: false }], '@babel/react'],
  plugins: ['@babel/plugin-proposal-class-properties'],
  env: {
    test: {
      presets: [['@babel/env', { loose: true, modules: 'commonjs' }]],
      plugins: ['@babel/transform-runtime']
    }
  }
};
