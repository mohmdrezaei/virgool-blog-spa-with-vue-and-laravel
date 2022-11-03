
window.Vue = require('vue').default;

import  vuetify  from "./plugin/vuetify"
import router from "./router/router";
import VueCompositionAPI from '@vue/composition-api';
window.axios = require('axios');
Vue.prototype.$http = window.axios;

Vue.use(VueCompositionAPI)

const app = new Vue({
    el: '#app',
    vuetify,
    router
});
