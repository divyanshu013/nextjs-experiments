const HTMLPlugin = require("html-webpack-plugin");
const ScriptHTMLPlugin = require("script-ext-html-webpack-plugin");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new HTMLPlugin());
    config.plugins.push(
      new ScriptHTMLPlugin({
        inline: "inline-demo.js",
      })
    );

    // Important: return the modified config
    return config;
  },
};
