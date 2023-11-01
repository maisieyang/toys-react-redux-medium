import { configureStore, combineReducers} from '@reduxjs/toolkit'

import { articleReducer } from './reducers/article';
import { authReducer } from './reducers/auth'
import { tagsReducer } from './reducers/tags'

const store = configureStore({
    reducer: combineReducers({
        article: articleReducer,
        auth: authReducer,
        tags: tagsReducer,
    })
})

export default store