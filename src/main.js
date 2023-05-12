import { createApp } from 'vue'
import App from './App.vue'

//import fontsource
import '@fontsource/poppins'
//importare bootstrap js
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

/* import fontawesome*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import {faChevronDown} from  '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
    faUserSecret,
    faSearch,
    faCircleUser,
    faChevronDown
)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
