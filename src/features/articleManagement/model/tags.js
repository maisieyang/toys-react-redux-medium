import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tags from '../../../entities/tags';
import { handleApiError, Status } from '../../../shared/utils/utils';

/**
 * Fetch all tags
 */
  export const getAllTags = createAsyncThunk(
    'tags/getAllTags',
    async (_,thunkApi) => {
        try {
            
            return await tags.getAll();
        }
        catch (error) {
            return handleApiError(error, thunkApi);
        }
    }
);

  /**
 * @type {AuthState}
 */
  const initialState = {
    status: Status.IDLE,
    tags: [],
    feedTag: '',

  };

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        chooseFeedTag: (state, action) => {
            state.feedTag = action.payload.feedTag;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllTags.fulfilled, (state, action) => {
            state.tags = action.payload.tags;
            state.status =  Status.SUCCESS;
        })
        .addCase(getAllTags.rejected, (state, action) => {
            
            state.error = action.error;
            state.status =  Status.FAILURE;
        })
        .addCase(getAllTags.pending, (state) => {
            
            state.tags = [];
            state.status =  Status.LOADING;
        })

    }
});

export const { chooseFeedTag } = tagsSlice.actions;

export default tagsSlice.reducer;

