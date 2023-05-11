module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.ts',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@commons': './src/commons',
          '@configs': './src/configs',
          '@constants': './src/constants',
          '@context': './src/context',
          '@core-ui': './src/core-ui',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@services': './src/services',
          '@validations': './src/validations',
        },
      },
    ],
  ],
};
