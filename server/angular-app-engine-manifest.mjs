
export default {
  basePath: 'https://david77-coder.github.io/app-jugadores-futbol',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
