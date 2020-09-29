const path = require('path');

module.exports = {
  resolve: {
    alias: {
      components: path.join(__dirname, '../src/components'),
      containers: path.join(__dirname, '../src/containers'),
      context: path.join(__dirname, '../src/context'),
      api: path.join(__dirname, '../src/helpers/api'),
      theme: path.join(__dirname, '../src/theme'),
      js: path.join(__dirname, '../src/helpers/js'),
      static: path.join(__dirname, '../src/static'),
      image: path.join(__dirname, '../src/static/images'),
      font: path.join(__dirname, '../src/static/fonts'),
      content: path.join(__dirname, '../src/static/content'),
    },
    extensions: [
      '.ts', '.tsx'
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../components')
     },
     {  test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: __dirname
     },
      {
        test: /\.stories\.jsx?$/,
        loader: require.resolve('@storybook/source-loader'),
        options: {
  
        },
        enforce: 'pre'
      },
      {
        test: /\.stories\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
          // Optional
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      },
      {
        test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        loader: require.resolve('file-loader'),
        query: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
};