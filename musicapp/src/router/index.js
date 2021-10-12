import {
  createRouter,
  createWebHistory
} from 'vue-router'
const Home = () => import('views/Home/Home.vue')
const FindNew = () => import('views/Home/HomeChilds/FindNew.vue')
const PodCast = () => import('views/Home/HomeChilds/PodCast.vue')
const MyMusic = () => import('views/Home/HomeChilds/MyMusic.vue')
const BeConcern = () => import('views/Home/HomeChilds/BeConcern.vue')
const YunCun = () => import('views/Home/HomeChilds/YunCun.vue')

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  redirect: '/find',
  children: [{
      path: 'find',
      name: 'Findnew',
      component: FindNew
    },
    {
      path: 'podcast',
      name: 'PodCast',
      component: PodCast
    },
    {
      path: 'my',
      name: 'MyMusic',
      component: MyMusic
    },
    {
      path: 'concern',
      name: 'BeConcern',
      component: BeConcern
    },
    {
      path: 'yuncun',
      name: 'YunCun',
      component: YunCun
    },
  ]
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router