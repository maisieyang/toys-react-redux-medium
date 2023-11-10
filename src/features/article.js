import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import articles from '../api/articles';


export const getArticle = createAsyncThunk(
  'articles/getArticle',
  articles.get
);

export const createArticle = createAsyncThunk(
  'articles/createArticle',
  articles.create,
);

export const updateArticle = createAsyncThunk(
  'articles/updateArticle',
  articles.update,
);

const initialState = {
  article: undefined,
  inProgress: false,
  errors: undefined,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    articlePageUnloaded: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getArticle.fulfilled, (state, action) => {
      state.article = action.payload.article;
      state.inProgress = false;
    });

    builder.addCase(createArticle.fulfilled, (state) => {
      state.inProgress = false;
    });

    builder.addCase(createArticle.rejected, (state, action) => {
      state.errors = action.error.errors;
      state.inProgress = false;
    });

    builder.addCase(updateArticle.fulfilled, (state) => {
      state.inProgress = false;
    });

    builder.addCase(updateArticle.rejected, (state, action) => {
      state.errors = action.error.errors;
      state.inProgress = false;
    });

    builder.addMatcher(
      (action) => action.type.endsWith('/pending'),
      (state) => {
        state.inProgress = true;
      }
    );

    builder.addDefaultCase((state) => {
      state.inProgress = false;
    });
  },
});

export const { articlePageUnloaded } = articleSlice.actions;

export default articleSlice.reducer;
