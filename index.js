/*
 * npm username -> donate page
 *
 * Whenever a `thanks` user has a package owned by one of these authors in their
 * package tree, they will be prompted to donate.
 */
const authors = {
  andrewnez: 'https://en.liberapay.com/andrew/',
  antony: 'https://www.patreon.com/wirah',
  bevacqua: 'https://www.patreon.com/bevacqua',
  feross: 'https://www.patreon.com/feross',
  getify: 'https://www.patreon.com/getify',
  hueniverse: 'https://www.patreon.com/eranhammer',
  hughsk: 'https://hughsk.io/donate/',
  jayphelps: 'https://www.patreon.com/jayphelps',
  kgryte: 'https://www.patreon.com/athan',
  limonte: 'https://www.patreon.com/limonte',
  mafintosh: 'https://www.patreon.com/mafintosh',
  marijn: 'https://www.patreon.com/marijn',
  mikeal: 'https://www.patreon.com/mikeal',
  mmckegg: 'https://www.patreon.com/MattMcKegg',
  moox: 'https://liberapay.com/MoOx/',
  mpj: 'https://www.patreon.com/funfunfunction',
  noffle: 'https://en.liberapay.com/noffle/',
  shama: 'https://www.patreon.com/shama',
  sindresorhus: 'https://www.patreon.com/sindresorhus',
  thlorenz: 'https://www.patreon.com/thlorenz',
  typicode: 'https://www.patreon.com/typicode',
  yyx990803: 'https://www.patreon.com/evanyou',
  juliangruber: 'https://www.patreon.com/juliangruber',
  steelbrain: 'https://www.patreon.com/steelbrain'
}

/*
 * npm package name -> donate page
 *
 * Whenever a `thanks` user has one these exact packages in their package tree,
 * they will be prompted to donate.
 */
const packages = {
  'babel-core': 'https://opencollective.com/babel',
  'bower': 'https://opencollective.com/bower',
  'chai': 'https://opencollective.com/chaijs',
  'cheerio': 'https://opencollective.com/cheerio',
  'choo': 'https://opencollective.com/choo',
  'gulp': 'https://opencollective.com/gulpjs',
  'gulp-cli': 'https://opencollective.com/gulpjs',
  'hoodie': 'https://opencollective.com/hoodie',
  'koa': 'https://opencollective.com/koajs',
  'material-ui': 'https://opencollective.com/material-ui',
  '@cycle/run': 'https://opencollective.com/cyclejs',
  '@cycle/rxjs-run': 'https://opencollective.com/cyclejs',
  '@cycle/most-run': 'https://opencollective.com/cyclejs',
  '@cycle/dom': 'https://opencollective.com/cyclejs',
  '@cycle/http': 'https://opencollective.com/cyclejs',
  '@cycle/html': 'https://opencollective.com/cyclejs',
  '@cycle/isolate': 'https://opencollective.com/cyclejs',
  '@cycle/history': 'https://opencollective.com/cyclejs',
  '@cycle/time': 'https://opencollective.com/cyclejs',
  'mocha': 'https://opencollective.com/mochajs',
  'parcel': 'https://opencollective.com/parcel',
  'phenomic': 'https://opencollective.com/phenomic',
  'preact': 'https://opencollective.com/preact',
  'pug': 'https://opencollective.com/pug',
  'react-native-elements': 'https://opencollective.com/react-native-elements',
  'redux-devtools-extension': 'https://opencollective.com/redux-devtools-extension',
  'rollup': 'https://opencollective.com/rollup',
  'socket.io': 'https://opencollective.com/socketio',
  'styled-components': 'https://opencollective.com/styled-components',
  'tachyons': 'https://opencollective.com/tachyons',
  'webpack': 'https://opencollective.com/webpack',
  'yo': 'https://opencollective.com/yeoman',
  'levelup': 'https://opencollective.com/level',
  'sierra-library': 'https://opencollective.com/sierra',
  'vue': 'https://opencollective.com/vuejs',
  'sketchpad': 'https://opencollective.com/sketchpad',
  'slim-js': 'https://opencollective.com/slimjs',
  'ng2-date-picker': 'https://opencollective.com/angular-datepicker',
  'esdiscuss.org': 'https://opencollective.com/esdiscuss',
  'undefined': 'https://opencollective.com/turf',
  'sinon': 'https://opencollective.com/sinon',
  'lad': 'https://opencollective.com/lad',
  'vis': 'https://opencollective.com/vis',
  '30-seconds-of-code': 'https://opencollective.com/30-seconds-of-code',
  '@storybook/root': 'https://opencollective.com/storybook',
  'WireFlow': 'https://opencollective.com/wireflow',
  'dim': 'https://opencollective.com/dim',
  'dat': 'https://opencollective.com/dat',
  'bootstrap-table': 'https://opencollective.com/bootstrap-table',
  'react-dropzone': 'https://opencollective.com/react-dropzone',
  'redom': 'https://opencollective.com/redom',
  'webslides': 'https://opencollective.com/webslides',
  'vue-admin': 'https://opencollective.com/vue-admin',
  'electron-react-boilerplate': 'https://opencollective.com/electron-react-boilerplate',
  'faker': 'https://opencollective.com/fakerjs',
  'parse-server': 'https://opencollective.com/parse-server',
  'nwitter': 'https://opencollective.com/node-twitter',
  'speedtracker': 'https://opencollective.com/speedtracker',
  'pokeapi': 'https://opencollective.com/pokeapi',
  'npms-www': 'https://opencollective.com/npms-www',
  'streetmix': 'https://opencollective.com/streetmix',
  'acgn-stock': 'https://opencollective.com/acgn-stock',
  'color-space': 'https://opencollective.com/color-space',
  'react-final-form': 'https://opencollective.com/final-form',
  'vue-js-modal': 'https://opencollective.com/vue-js-modal',
  '@feathersjs/feathers': 'https://opencollective.com/feathers',
  'hackathon-starter': 'https://opencollective.com/hackathon-starter',
  'ream': 'https://opencollective.com/ream',
  'Fireideaz': 'https://opencollective.com/distributed',
  'antd': 'https://opencollective.com/ant-design',
  'material-ui-build': 'https://opencollective.com/material-ui',
  'openlayers': 'https://opencollective.com/openlayers',
  'typeorm': 'https://opencollective.com/typeorm',
  '@compodoc/compodoc': 'https://opencollective.com/compodoc',
  'remotedev-redux-devtools-extension': 'https://opencollective.com/redux-devtools-extension',
  'openfl': 'https://opencollective.com/openfl',
  'document-register-element': 'https://opencollective.com/document-register-element',
  'ax5ui-kernel': 'https://opencollective.com/ax5ui-kernel',
  'idyll': 'https://opencollective.com/idyll',
  'hamsters.js': 'https://opencollective.com/hamstersjs',
  'firekylin': 'https://opencollective.com/firekylin',
  'mobx': 'https://opencollective.com/mobx',
  'parle': 'https://opencollective.com/parle',
  'debug': 'https://opencollective.com/debug',
  'babel': 'https://opencollective.com/babel',
  'sweetalert2': 'https://opencollective.com/sweetalert2',
  'awesome-mac': 'https://opencollective.com/awesome-mac',
  'ifme': 'https://opencollective.com/ifme',
  'lethargy': 'https://opencollective.com/lethargy',
  'nodemailer': 'https://opencollective.com/nodemailer',
  'mup': 'https://opencollective.com/meteor-up',
  'lem': 'https://opencollective.com/lem',
  'fuse-box': 'https://opencollective.com/fuse-box',
  'ava': 'https://opencollective.com/ava',
  'emoji-url-shortener': 'https://opencollective.com/url-shortener',
  'ngx-infinite-scroll': 'https://opencollective.com/ngx-infinite-scroll',
  'nodedata': 'https://opencollective.com/node-data',
  'aurelia-framework': 'https://opencollective.com/aurelia',
  'jqplay': 'https://opencollective.com/jqplay',
  'mongoose': 'https://opencollective.com/mongoose',
  'hedron': 'https://opencollective.com/hedron',
  'hyperhtml': 'https://opencollective.com/hyperhtml',
  'erxes': 'https://opencollective.com/erxes',
  'd3-node-editor': 'https://opencollective.com/d3-node-editor',
  'react-slick': 'https://opencollective.com/react-slick',
  'research-engine': 'https://opencollective.com/research-engine',
  'echoes-player': 'https://opencollective.com/echoes-player',
  'ellie': 'https://opencollective.com/ellie',
  'hexo': 'https://opencollective.com/hexo',
  'react-ace': 'https://opencollective.com/react-ace',
  '@colmena/colmena': 'https://opencollective.com/colmena',
  'hoverboard': 'https://opencollective.com/hoverboard',
  'react-on-rails': 'https://opencollective.com/react-on-rails',
  'generator-jhipster': 'https://opencollective.com/generator-jhipster',
  'bundlesize': 'https://opencollective.com/bundlesize',
  'wallabag': 'https://opencollective.com/wallabag',
  'sweetalert': 'https://opencollective.com/sweetalert',
  'esnextbin': 'https://opencollective.com/esnextbin',
  'docker.io': 'https://opencollective.com/dockerio',
  'DataServices': 'https://opencollective.com/cloudboost',
  'caption': 'https://opencollective.com/caption',
  'react-native-firebase': 'https://opencollective.com/react-native-firebase',
  'ReactPWA': 'https://opencollective.com/react-pwa',
  'ccxt': 'https://opencollective.com/ccxt',
  'cloudcmd': 'https://opencollective.com/cloudcmd',
  'oni': 'https://opencollective.com/oni',
  'go-plus': 'https://opencollective.com/go-plus',
  'whs': 'https://opencollective.com/whitestormjs',
  'shapeshifter': 'https://opencollective.com/shapeshifter',
  'react-native-cn': 'https://opencollective.com/react-nativecn',
  'nexe': 'https://opencollective.com/nexe',
  'ramda-adjunct': 'https://opencollective.com/ramda-adjunct',
  'aresume': 'https://opencollective.com/resume',
  '@jscad/openjscad': 'https://opencollective.com/openjscad',
  'xss-listener': 'https://opencollective.com/xss-listener',
  'icestudio': 'https://opencollective.com/icestudio',
  'react-native-debugger': 'https://opencollective.com/react-native-debugger',
  'octotree': 'https://opencollective.com/octotree',
  'telegraf': 'https://opencollective.com/telegraf',
  'grapesjs': 'https://opencollective.com/grapesjs',
  'griddle-react': 'https://opencollective.com/griddle',
  'beakerbrowser': 'https://opencollective.com/beaker',
  'moro': 'https://opencollective.com/moro',
  'surfbird': 'https://opencollective.com/surfbird',
  'tipbox': 'https://opencollective.com/tipbox',
  'dep': 'https://opencollective.com/dep',
  'Grow-IoT': 'https://opencollective.com/grow-iot',
  'riot': 'https://opencollective.com/riot',
  'hyperline': 'https://opencollective.com/hyperline',
  'parcel-bundler': 'https://opencollective.com/parcel',
  'cockpit-next': 'https://opencollective.com/cockpit',
  'jsbin': 'https://opencollective.com/jsbin',
  'WPGulp': 'https://opencollective.com/wpgulp',
  'ndm': 'https://opencollective.com/ndm',
  'javascript-obfuscator': 'https://opencollective.com/javascript-obfuscator',
  'TellForm': 'https://opencollective.com/tellform',
  'vim-cheat-sheet': 'https://opencollective.com/vim-cheat-sheet',
  'weather-10kb': 'https://opencollective.com/weather-10kb',
  'ui-grid': 'https://opencollective.com/ui-grid',
  't-scroll': 'https://opencollective.com/t-scroll',
  'universalviewer': 'https://opencollective.com/universalviewer',
  'poi': 'https://opencollective.com/poi',
  'Sizzy': 'https://opencollective.com/sizzy',
  'react-native-router-flux': 'https://opencollective.com/react-native-router-flux',
  'cypress': 'https://opencollective.com/cypressio',
  'altair': 'https://opencollective.com/altair',
  'skatejs-monorepo': 'https://opencollective.com/skatejs',
  'element-ui': 'https://opencollective.com/element',
  'colyseus': 'https://opencollective.com/colyseus',
  'ConfigurableMapViewerCMV': 'https://opencollective.com/cmv-app',
  'reactabular': 'https://opencollective.com/reactabular',
  'react-native-camera': 'https://opencollective.com/react-native-camera',
  'react-native-masonry': 'https://opencollective.com/react-native-masonry',
  'satellizer': 'https://opencollective.com/satellizer',
  'boost': 'https://opencollective.com/boostnoteio',
  'aplayer': 'https://opencollective.com/aplayer',
  'noble': 'https://opencollective.com/noble',
  'angular-socialshare': 'https://opencollective.com/angular-socialshare',
  'jquery-jsonview': 'https://opencollective.com/jquery-jsonview',
  'ferment': 'https://opencollective.com/lolashare',
  'Vulcan': 'https://opencollective.com/telescope',
  'ion-rangeslider': 'https://opencollective.com/ionrangeslider',
  'jquery.adaptive-backgrounds': 'https://opencollective.com/jquery-adaptive-background',
  'react-native-responsive-grid': 'https://opencollective.com/react-native-responsive-grid',
  'nodemon': 'https://opencollective.com/nodemon',
  'fontplop': 'https://opencollective.com/fontplop',
  'eme': 'https://opencollective.com/eme',
  'voca': 'https://opencollective.com/voca',
  'fast-xml-parser': 'https://opencollective.com/fast-xml-parser',
  'selection-sharer': 'https://opencollective.com/selection-sharer',
  'openscope': 'https://opencollective.com/openscope',
  'Matterwiki': 'https://opencollective.com/matterwiki',
  'bootstrap-vue': 'https://opencollective.com/bootstrap-vue',
  'split.js': 'https://opencollective.com/splitjs',
  'lazy.ai': 'https://opencollective.com/lazy-bot',
  'app': 'https://opencollective.com/react-static-boilerplate',
  'AnsPress': 'https://opencollective.com/anspress',
  'cezerin': 'https://opencollective.com/cezerin',
  'modular-admin-html': 'https://opencollective.com/modular-admin',
  'postgraphql': 'https://opencollective.com/postgraphql',
  'vux': 'https://opencollective.com/vux',
  'linter': 'https://opencollective.com/linter',
  'react-native-image-crop-picker': 'https://opencollective.com/react-native-image-crop-picker',
  'apollo-universal-starter-kit': 'https://opencollective.com/apollo-universal-starter-kit',
  'trails': 'https://opencollective.com/trails',
  'offline-plugin': 'https://opencollective.com/offline-plugin',
  'nightwatch': 'https://opencollective.com/nightwatch',
  'mimic': 'https://opencollective.com/mimic',
  'karma-typescript': 'https://opencollective.com/karma-typescript',
  'cboard': 'https://opencollective.com/cboard',
  'jss': 'https://opencollective.com/jss',
  'strider': 'https://opencollective.com/strider',
  'ion-sound': 'https://opencollective.com/ionsound',
  'ghost': 'https://opencollective.com/ghost',
  'pug-monorepo': 'https://opencollective.com/pug',
  'discord.js': 'https://opencollective.com/discordjs',
  'pickadate': 'https://opencollective.com/pickadatejs',
  'nestjs': 'https://opencollective.com/nest',
  'dplayer': 'https://opencollective.com/dplayer',
  'redux-saga': 'https://opencollective.com/redux-saga',
  'sage': 'https://opencollective.com/sage',
  'react-toolbox': 'https://opencollective.com/react-toolbox',
  'nuxt': 'https://opencollective.com/nuxtjs',
  'react-boilerplate': 'https://opencollective.com/react-boilerplate',
  '@reactivex/rxjs': 'https://opencollective.com/rxjs',
  'angular-starter': 'https://opencollective.com/angular-starter',
  'cerebro': 'https://opencollective.com/cerebro',
  'gh-badges': 'https://opencollective.com/shields',
  'verdaccio': 'https://opencollective.com/verdaccio',
  'wiki': 'https://opencollective.com/wikijs',
  'react-styleguidist': 'https://opencollective.com/styleguidist',
  'google-play-music-desktop-player': 'https://opencollective.com/google-play-music-desktop-player-unofficial-',
  'gitpoint': 'https://opencollective.com/git-point',
  'Kaku': 'https://opencollective.com/kaku',
  'cdnjs': 'https://opencollective.com/cdnjs',
  'ava-ia': 'https://opencollective.com/ava-ia',
  'front-end-checklist': 'https://opencollective.com/front-end-checklist',
  'ran-boilerplate': 'https://opencollective.com/ran',
  'react-redux-firebase': 'https://opencollective.com/react-redux-firebase',
  'vsc-material-theme': 'https://opencollective.com/vsc-material-theme',
  'stylelint': 'https://opencollective.com/stylelint',
  'flatpickr': 'https://opencollective.com/flatpickr',
  'date-fns': 'https://opencollective.com/date-fns',
  'commitizen': 'https://opencollective.com/commitizen',
  'lumo': 'https://opencollective.com/lumo',
  'kea': 'https://opencollective.com/kea',
  'docute': 'https://opencollective.com/docute',
  'inferno-build': 'https://opencollective.com/inferno',
  'OctoLinker': 'https://opencollective.com/octolinker',
  'tldjs': 'https://opencollective.com/tldjs',
  'docsify': 'https://opencollective.com/docsify',
  'axboot': 'https://opencollective.com/ax-boot-framework',
  'relax': 'https://opencollective.com/relax',
  'CNodeRN': 'https://opencollective.com/cnodern',
  '@ngrx/platform': 'https://opencollective.com/ngrx',
  'buttercup-desktop': 'https://opencollective.com/buttercup'
}

module.exports = { authors, packages }
