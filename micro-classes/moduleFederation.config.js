import { dependencies } from './package.json';

module.exports = {
   name: "coursecube",
   filename: "remoteEntry.js",
   remotes: {},
   exposes: {'./CourseCube': './src/App'},
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


