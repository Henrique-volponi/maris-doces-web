const { paths } = require('react-app-rewired')

module.exports = {
  ...paths,
  babel: {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@ui': './libs/ui',
          },
        },
      ],
    ],
  },
}
