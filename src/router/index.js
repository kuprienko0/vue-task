import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from "../components/Details";
import Content from "../components/Content";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Content },
    { path: '/details/:id', name: 'details', component: Details, props: true },
]

export default new VueRouter({
    routes
})

