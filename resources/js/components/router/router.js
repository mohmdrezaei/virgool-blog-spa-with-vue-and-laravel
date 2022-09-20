import Vue from "vue";
import VueRouter from "vue-router";
import login from "../view/auth/login";
import register from "../view/auth/register";
import Home from "../view/Home";

Vue.use(VueRouter);
export default new VueRouter({
    mode:"history",
    routes:[
        {
            path: "/",
            component: Home,
            name: "hone"
        },
        {
            path: "/login",
            component: login,
            name:"login"
        },
        {
            path: "/register",
            component: register,
            name:"register"
        }
    ]


});
