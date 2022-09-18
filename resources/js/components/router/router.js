import Vue from "vue";
import VueRouter from "vue-router";
import login from "../view/auth/login";
import register from "../view/auth/register";

Vue.use(VueRouter);
export default new VueRouter({
    mode:"history",
    routes:[
        {
            path: "/login",
            component: login
        },
        {
            path: "/register",
            component: register
        }
    ]


});
