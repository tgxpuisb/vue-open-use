import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import World from '@/components/World'
import Page from '@/components/Page'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/world',
            name: 'World',
            component: World
        },
        {
            path: '/page',
            name: 'the-page',
            component: Page
        }
    ]
})
