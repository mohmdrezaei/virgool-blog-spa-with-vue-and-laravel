
window.Vue = require('vue').default;

import  vuetify  from "./components/plugin/vuetify"
import router from "./components/router/router";


const app = new Vue({
    el: '#app',
    vuetify,
    router
});
