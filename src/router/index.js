import {
  createRouter,
  createWebHistory
} from 'vue-router'
const Login = () => import('views/Login')
const Phone = () => import('views/Login/LoginChilds/Phone.vue')
const VerCode = () => import('views/Login/LoginChilds/VerCode.vue')
const Home = () => import('views/Home')
const FindNew = () => import('views/Home/HomeChilds/FindNew.vue')
const PodCast = () => import('views/Home/HomeChilds/PodCast.vue')
const MyMusic = () => import('views/Home/HomeChilds/MyMusic.vue')
const BeConcern = () => import('views/Home/HomeChilds/BeConcern.vue')
const YunCun = () => import('views/Home/HomeChilds/YunCun.vue')
const Search = () => import('views/Search')
const routes = [{
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    redirect: '/home/find',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/login/phone',
    name: 'Phone',
    component: Phone,
  },
  {
    path: '/login/phone/vercode',
    name: 'VerCode',
    component: VerCode,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
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
  },
  {
    path: "/search",
    name: 'Search',
    component: Search,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router