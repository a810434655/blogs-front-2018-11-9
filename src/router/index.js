import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import right from "@/components/mokuai-you"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      components: {
        default:HelloWorld,
        youbian:right
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default:HelloWorld,
        youbian:right
      }
    },
    {
      path:"*",
      redirect:"/home"
    }
  ]
})
