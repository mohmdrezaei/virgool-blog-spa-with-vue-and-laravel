
window.Vue = require('vue').default;

import  vuetify  from "./plugin/vuetify"
import router from "./router/router";

window.axios = require('axios');
Vue.prototype.$http = window.axios;
const app = new Vue({
    el: '#app',
    vuetify,
    router
});
