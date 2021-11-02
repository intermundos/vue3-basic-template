import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '@assets/styles/vendors.scss'
import '@assets/styles/main.scss'
import { createApp }  from 'vue'
import { router }     from '@core/router/router.js'
import { addPlugins } from '@core/plugins'
import App            from './App.vue'

const isProduction = process.env.NODE_ENV === 'production'

const app = createApp( App )

app.config.devtools = !isProduction
app.use( router )

addPlugins(app, router)

router.isReady().then( () => app.mount( '#app' ) )
