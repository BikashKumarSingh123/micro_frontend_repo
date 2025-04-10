import { dependencies } from './package.json';

module.exports = {
   name: "micro",
   filename: "",
   remotes: {
      'homepage': 'homepage@http://localhost:3008/remoteEntry.js',
      'coursecube': 'coursecube@http://localhost:3007/remoteEntry.js',
   },
   exposes: {},
   shared: {
      ...dependencies,
      react: {
         singleton: true,
         import: "react",
         shareSchope: "default",
         requiredVersion: dependencies.react,
      },
      "react-dom": {
         singleton: true,
         requiredVersion: dependencies['react-dom'],
      }
   }
}


 
 