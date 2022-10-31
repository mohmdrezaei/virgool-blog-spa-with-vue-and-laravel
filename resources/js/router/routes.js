import FrontLayout from "../view/layout/FrontLayout";
import Home from "../view/Home";
import PostShow from "../view/Post/PostShow";
import MyPosts from "../view/Post/MyPosts";
import AdminLayout from "../view/layout/AdminLayout";
import Dashboard from "../view/admin/Dashboard";
import login from "../view/auth/login";
import register from "../view/auth/register";
import NotFound from "../components/Error/NotFound";
import AccessDenied from "../components/Error/AccessDenied";

export default [
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
                {
                    path: 'posts/draft',
                    component: MyPosts,
                    name: "my-posts"
                },
            ]
    },
    {
        path: '/admin',
        component:AdminLayout,
        children:[
            {
                path: 'dashboard',
                component: Dashboard,
                name: 'admin-dashboard'
            }
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
    },
    {
        path: '/404',
        component: NotFound ,
        name: "not-found"
    },
    {
        path: '*',
        component: NotFound ,
        redirect: '/404'
    },
    {
        path: '/403',
        component: AccessDenied ,
        name: "access-denied"
    },
]
