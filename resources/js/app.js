
window.Vue = require('vue').default;

import  vuetify  from "./plugin/vuetify"
import router from "./router/router";


const app = new Vue({
    el: '#app',
    vuetify,
    router
});
