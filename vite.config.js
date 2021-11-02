import paths from './config/paths.js'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'


// const paths = require('./config/paths.js')

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [ vue(), WindiCSS() ],
  server:  {
    port: process.env.PORT || 3000,
    open: false
  },
  resolve: {
    alias:   paths.makeAliasForVite()
  }

}
