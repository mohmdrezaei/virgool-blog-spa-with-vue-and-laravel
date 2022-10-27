import Vue from "vue";
import VueRouter from "vue-router";
import login from "../view/auth/login";
import register from "../view/auth/register";
import Home from "../view/Home";
import FrontLayout from "../view/layout/FrontLayout";
import PostShow from "../view/Post/PostShow";

Vue.use(VueRouter);
export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            component: FrontLayout,
            children:
                [
                    {
                        path: '',
                        component: Home,
                        name: "home"
                    },
                    {
                        path: 'post/:slug',
                        component: PostShow,
                        name: "post-show"
                    },
                ]
        },

        {
            path: "/login",
            component: login,
            name: "login"
        },
        {
            path: "/register",
            component: register,
            name: "register"
        }
    ]


});
