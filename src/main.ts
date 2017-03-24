'use strict'

import * as Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/app.vue'
import Code from './components/code.vue'
import Home from './components/home.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home }
    ]
});

new Vue({
    router: router,
    el: '#start',
    render: h => h(App)
});