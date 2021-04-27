import vue from '@vitejs/plugin-vue'

const paths = require('./config/paths.js')

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [ vue() ],
  server:  {
    port: process.env.PORT || 3000,
    open: false,
    watch: {
      // ignored: ['.tailwindcss']
    }
  },
  alias:   paths.makeAliasForVite()
}
