import Vue from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-css.min';
import 'prismjs/components/prism-git.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-less.min';
import 'prismjs/components/prism-markdown.min';
import 'prismjs/components/prism-markup.min';
import 'prismjs/components/prism-php.min';
import 'prismjs/components/prism-sql.min';
import 'prismjs/components/prism-sass.min';
import 'prismjs/components/prism-scss.min';
import 'prismjs/components/prism-twig.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-bash.min';

const VuePrism = {
  install (Vue, options) {
    Vue.mixin({
      mounted () {
        Prism.highlightAll()
      }
    })
  }
}

if (process.browser) {
  Vue.use(VuePrism)
}
