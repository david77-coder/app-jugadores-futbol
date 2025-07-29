
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/app-jugadores-futbol/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 68471, hash: '64912aa8a979feb5dda4b38919011d92095ea0079ebcabf07956fa954c6f447e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17163, hash: '1918d05ca5073048893fbdf7b9339b71e75b690530cc8b9ed7cd824e94467c5d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RGB4RZZL.css': {size: 319822, hash: 'Dhj1ySnaqEo', text: () => import('./assets-chunks/styles-RGB4RZZL_css.mjs').then(m => m.default)}
  },
};
