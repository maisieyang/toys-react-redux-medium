import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'


/**
 * This file sets up and exports the global Redux store.
 */

const store = configureStore({
    reducer: rootReducer,
})

export default store