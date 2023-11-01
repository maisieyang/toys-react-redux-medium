import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import agent from '../../api/agent';
import { handleApiError, Status } from '../../common/utils';

/**
 * Fetch all tags
 */
  export const getAllTags = createAsyncThunk(
    'tags/getAllTags',
    async (_,thunkApi) => {
        try {
            
            return await agent.Tags.getAll();
        }
        catch (error) {
            return handleApiError(error, thunkApi);
        }
    }
);

// /**
//  * 
//  * @param {object} argument
//  * @param {string} argument.tag
//  * @param {number} argument.page
//  */
// export const getArticlesByTag = createAsyncThunk(
//     'tags/getArticlesByTag',
//     async (values, thunkApi) => {
//         try {
//             const { tag, page } = values;
//             return await agent.Articles.byTag(tag, page);
//         }
//         catch (error) {
//             return handleApiError(error, thunkApi);
//         }
//     }
// );

  /**
 * @type {AuthState}
 */
  const initialState = {
    status: Status.IDLE,
  };

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllTags.fulfilled, (state, action) => {
            
            state.tags = action.payload.tags;
        })
        .addCase(getAllTags.rejected, (state, action) => {
            
            state.error = action.error;
        })
        .addCase(getAllTags.pending, (state) => {
            
            state.tags = [];
        })

    }
});


export const tagsReducer = tagsSlice.reducer;

