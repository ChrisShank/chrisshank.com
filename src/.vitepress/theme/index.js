import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import Stage from './components/Stage.vue';

import './main.css';

export default {
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    //app.config.isCustomElement = (tag) => tag.startsWith('orbit-');
    app.component('Stage', Stage);
  },
};
