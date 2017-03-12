module.exports = {

entry: "./public/app.jsx",
output: {
  path: __dirname,
  filename: './public/bundle.js'
  },
  resolve: ["", ".js", ".jsx"],
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015']
        },
        test:/\.jsx$/,
        exclude: /(node_module|bower_components)/
      }
    ]
  }
};