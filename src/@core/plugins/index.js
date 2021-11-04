import { addProgressBar } from './progress-bar.js'
import { addToaster }     from './toaster.js'
import { addStore }       from './store.js'
import { addQuasar }      from './quasar.js'

export function addPlugins( app, router ) {

  addQuasar(app)
  addToaster( app )
  addProgressBar( app )
  addStore( app )

}