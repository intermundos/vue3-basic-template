import '@assets/styles/vendors.scss'
import '@assets/styles/main.scss'
import { createApp } from 'vue'
import App           from './App.vue'
import { store }     from '@core/store/store.js'
import { router }    from '@core/router/router.js'

const isProduction = process.env.NODE_ENV === 'production'

const app = createApp( App )

app.config.devtools = !isProduction
app.use( store )
app.use(router)

router.isReady().then(() => app.mount( '#app' ))
