import { container } from "webpack";
const { ModuleFederationPlugin } = container;

const fs = require('fs');
const path = require('path');
const wabpackConfig = require(wabpackConfigpath);

const override = (config) => {
   const mfConfigPath = path.resolve(__dirname, 'moduleFederation.config.js');
   if(fs.existsSync(mfConfigPath)){
      const mfConfig = require(mfConfigPath);
      config.plugins.push(new ModuleFederationPlugin(mfConfig));
      config.output.publicPath = "auto";
   }
   return config;
}

require.cache[require.resolve(wabpackConfigpath)].exports = env => {
   override(wabpackConfig(env))
   module.exports = require(wabpackConfigpath);
};

// export const plugins = [
//    new ModuleFederationPlugin({
//       name: "home_page",
//       filename: "remoteEntry.js",
//       library: { type: "var", name: "home_page" },
//       remotes: {},
//       exposes: {
//          "./HomePage": "./src/App"
//       }
//    })
// ];
