// release.config.js
module.exports = {
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      ['@semantic-release/github', {
        assets: 'charts/*.tgz',
        tarballUrl: 'https://github.com/:oostvoort/:monitoring/archive/${nextRelease.gitTag}.tar.gz'  // Override the tarballUrl template
      }]
    ],
  };
  