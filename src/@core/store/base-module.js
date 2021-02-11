import { setter } from './utils/helpers.js';

const genericMutation = () => {}

const StoreModule = ( { state = {}, actions = {}, getters = {}, mutations = {} } ) => {

    return {
        namespaced: true,
        state:      state,
        getters:    getters,
        actions:    actions,
        mutations:  {
            ...mutations,
            setProp: (state, config) => setter(state)(config)

        },
    }

}

export { StoreModule }
