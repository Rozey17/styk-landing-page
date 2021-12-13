// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const path = require('path');
const withNx = require('@nrwl/next/plugins/with-nx');
const withPWA = require('next-pwa');
const withCCss = require('@zeit/next-css');
const lessToJS = require('less-vars-to-js');
const withLess = require('@zeit/next-less');
const runtimeCaching = require('next-pwa/cache');
const withPlugin = require('next-compose-plugins');
/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/

// Where your global.less file lives
// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve('libs/shared-ui/src/assets/global.less'), 'utf8')
// );

module.exports = () => {
  return withCCss(
      withLess({
        // cssModules: true,
        webpack5: false,
        loader: 'less-loader',
        lessLoaderOptions: {
          javascriptEnabled: true,
          // modifyVars: themeVariables, // make your antd custom effective
        },
        i18n: {
          locales: ['fr', 'en'],
          defaultLocale: 'fr',
        },
        webpack: (config, { isServer }) => {
          if (isServer) {
            const antStyles = /antd\/.*?\/style.*?/;
            const origExternals = [...config.externals];
            config.externals = [
              (context, request, callback) => {
                if (request.match(antStyles)) return callback();
                if (typeof origExternals[0] === 'function') {
                  origExternals[0](context, request, callback);
                } else {
                  callback();
                }
              },
              ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ];
            config.module.rules.unshift({
              test: antStyles,
              use: 'null-loader',
            });
          }
          return config;
        },
      })
    )
};


// const nextConfig = () => {
//   // return withPWA(
//   return withCCss(
//     withLess({
//       // cssModules: true,
//       nx: {
//         // Set this to false if you do not want to use SVGR
//         // See: https://github.com/gregberge/svgr
//         svgr: true,
//       },
//       webpack5: false,

//       loader: 'less-loader',
//       lessLoaderOptions: {
//         javascriptEnabled: true,
//         // modifyVars: themeVariables, // make your antd custom effective
//       },
//       // pwa: {
//       //   dest: 'public',
//       //   swSrc: 'service-worker.js',
//       //   register: true,
//       //   skipWaiting: true,
//       //   disable: process.env.NODE_ENV === 'development',
//       //   runtimeCaching,
//       //   buildExcludes: [/middleware-manifest.json$/],
//       // },
//       i18n: {
//         locales: ['fr', 'en'],
//         defaultLocale: 'fr',
//       },
//       webpack: (config, { isServer }) => {
//         if (isServer) {
//           const antStyles = /antd\/.*?\/style.*?/;
//           const origExternals = [...config.externals];
//           config.externals = [
//             (context, request, callback) => {
//               if (request.match(antStyles)) return callback();
//               if (typeof origExternals[0] === 'function') {
//                 origExternals[0](context, request, callback);
//               } else {
//                 callback();
//               }
//             },
//             ...(typeof origExternals[0] === 'function' ? [] : origExternals),
//           ];

//           config.module.rules.unshift({
//             test: antStyles,
//             use: 'null-loader',
//           });
//         }
//         return config;
//       },
//     })
//   );
//   // );
// };

// module.exports = withNx(nextConfig);
// module.exports = withPlugin([withNx, withPWA], nextConfig);
