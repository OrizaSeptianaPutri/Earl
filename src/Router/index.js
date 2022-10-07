import Vue from 'vue'
import Router from 'vue-router'
import HomeTest from "../components/HomeTest.vue"
import AboutTest from "../components/AboutTest.vue"

Vue.use(Router)
const routes = [
    {
      //path : mendefinisikan path pada URL browser
      path: "/",
      // identifier yang nanti kita gunakan ketika membuat router link
      name: "Home",
      //template url yang akan di akses
      component: HomeTest
    },
    {
      path: "/About",
      name: "About",
      component: AboutTest
    },
    ]
    const createRouter = () => new Router({
      routes
  })
const router= createRouter()
export default router