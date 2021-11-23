# mini-app-food
A small app that shows food photos

# Important url with sass
To fix url import from sass we configured the following in `webpack.config.js`
```
module: {
    rules: [
      //...
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource"
      },
    ],
  },
```
the most important was `type: "asset/resource"`

## Run in dev mode
```
npm start
```

## Build for production
```
npm run build
```
