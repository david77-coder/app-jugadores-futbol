
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://david77-coder.github.io/app-jugadores-futbol/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 68502, hash: 'b32e1da8a315a2574f52111356fb1cde8fa64651d37fadfd12273a31c590d750', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17194, hash: '4c6315deb8778daf4a80482feba5e564894b0558fc05313e7186ef02a1d4e0cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RGB4RZZL.css': {size: 319822, hash: 'Dhj1ySnaqEo', text: () => import('./assets-chunks/styles-RGB4RZZL_css.mjs').then(m => m.default)}
  },
};
