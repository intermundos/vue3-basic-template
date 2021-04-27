import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-green/theme.css'
// import 'primevue/resources/primevue.min.css'
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';

export function addTheme( app ) {
    app.use( PrimeVue )
    app.component( 'g-button', Button )
    app.component( 'g-calendar', Calendar )
    return app
}
