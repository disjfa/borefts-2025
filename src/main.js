import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBeerMugEmpty,
  faBell as faBellSolid,
  faSearch,
  faSquareCheck,
  faThumbsUp as faThumbsUpSolid,
} from '@fortawesome/free-solid-svg-icons'
import {
  faBell as faBellRegular,
  faCircleQuestion,
  faSquare,
  faThumbsUp as faThumbsUpRegular,
} from '@fortawesome/free-regular-svg-icons'
import { faUntappd } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

library.add(
  faBeerMugEmpty,
  faBellRegular,
  faBellSolid,
  faCircleQuestion,
  faSearch,
  faSquare,
  faSquareCheck,
  faThumbsUpRegular,
  faThumbsUpSolid,
  faUntappd,
)

const app = createApp(App)
const pinia = createPinia()

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)

const head = createHead()
app.use(head)

import { useThemeStore } from './stores/theme'
useThemeStore()

app.mount('#app')
