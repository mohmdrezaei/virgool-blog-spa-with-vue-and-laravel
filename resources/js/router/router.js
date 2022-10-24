import Vue from "vue";
import VueRouter from "vue-router";
import login from "../view/auth/login";
import register from "../view/auth/register";
import Home from "../view/Home";
import FrontLayout from "../view/layout/FrontLayout";

Vue.use(VueRouter);
export default new VueRouter({
    mode:"history",
    routes:[
        {
           path:'/' ,
            component: require("@/view/layout/FrontLayout").default,
            children:[
                {
                    path: "",
                    component: require("@/view/Home").default,
                    name: "home"
                },
            ]
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
