import { configureStore, combineReducers} from '@reduxjs/toolkit'

import { articleReducer } from './reducers/article';

const store = configureStore({
    reducer: combineReducers({
        article: articleReducer
    })
})

export default store