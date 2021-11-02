import VueProgressbar from '@jambonn/vue-next-progressbar'

export function addProgressBar( app ) {
  app.use( VueProgressbar, { router: true } )
}