import '@assets/styles/global.scss'
import { createApp } from 'vue'
import App           from './App.vue'
import { store }     from '@core/store/store.js'

const isProduction = process.env.NODE_ENV === 'production'

const app = createApp( App )

app.config.devtools = !isProduction
app.use(store)
app.mount( '#app' )
