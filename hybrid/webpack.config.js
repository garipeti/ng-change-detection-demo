module.exports = {
  devtool: 'source-map',
  entry: {
    main: './app/index.ts'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    loaders: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};