import { combineReducers } from '@reduxjs/toolkit'

import { articleReducer } from '../../features/article'
import { authReducer } from '../../features/userManagement/model/auth'
import { tagsReducer } from '../../features/articleManagement/model/tags'


/**
 * This file combines all the slice reducers to form the root reducer.
 */

const rootReducer = combineReducers({
    article: articleReducer,
    auth: authReducer,
    tags: tagsReducer,
})

export default rootReducer