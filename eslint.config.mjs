import next from 'eslint-config-next';

export default [
  { ignores: ['.next/**', 'node_modules/**'] },
  ...next,
  {
    rules: {
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      // for use in edge api routes
      '@next/next/no-server-import-in-page': 'off'
    }
  }
];
