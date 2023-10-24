import { configureStore, combineReducers} from '@reduxjs/toolkit'

import { articleReducer } from './reducers/article';
import { authReducer } from './reducers/auth'

const store = configureStore({
    reducer: combineReducers({
        article: articleReducer,
        auth: authReducer,
    })
})

export default store