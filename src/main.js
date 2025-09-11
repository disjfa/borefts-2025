import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faStar as faStarSolid,
  faThumbsUp as faThumbsUpSolid,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import {
  faStar as faStarRegular,
  faThumbsUp as faThumbsUpRegular,
  faSquare,
  faSquareCheck,
} from '@fortawesome/free-regular-svg-icons'
import { faUntappd } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

library.add(
  faSearch,
  faSquare,
  faSquareCheck,
  faStarRegular,
  faStarSolid,
  faThumbsUpRegular,
  faThumbsUpSolid,
  faUntappd,
)

const app = createApp(App)
const pinia = createPinia()

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)

import { useThemeStore } from './stores/theme'
const themeStore = useThemeStore()

app.mount('#app')
