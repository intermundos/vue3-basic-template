import { addProgressBar } from './progress-bar.js'
import { addToaster }     from './toaster.js'
import { addStore }       from './store.js'

export function addPlugins( app, router ) {

  addToaster( app )
  addProgressBar( app )
  addStore( app )

}