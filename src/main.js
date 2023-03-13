import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import pinia from './store'
// import  vuetify from vuetify;
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'vuetify/dist/vuetify.min.css' 


library.add(faBars)


createApp(App).use(router,MotionPlugin).use(pinia).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
