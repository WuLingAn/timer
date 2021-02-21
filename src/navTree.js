import home from "@/view/home.vue";
import about from "@/view/about";
import user from "@/view/user";
import user1 from "@/view/user1";
import user2 from "@/view/user2";
import basic from "@/view/basic";
import advanced from "@/view/advanced";
import advancedChildren from "@/view/advancedChildren";

let tree = [
    {
        name: '简介',
        path: "/home",
        component: home
    },
    {
        name: '基础版',
        path: '/basic',
        component: basic
    },
    {
        name: '循环版',
        path: '/advanced',
        component: advanced,
        children: [
            {
                name: '50/10循环',
                path: 'loop50To10',
                component: advancedChildren
            }
        ]
    },
    {
        name: '用户',
        path: "/user",
        component: user,
        children: [
            {
                name: '用户1',
                path: 'profile',
                component: user1
            },
            {
                name: '用户2',
                path: 'posts',
                component: user2
            }
        ]
    },
    {
        name: '关于',
        path: "/about",
        component: about
    },
]

export default tree;
