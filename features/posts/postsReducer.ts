import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPosts } from "../../helpers/fetchPosts";
import { Post } from '../../types/Post';

type PostsState = {
  posts: Post[];
  loading: boolean;
  error: string;
};

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: '',
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(init.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });
    builder.addCase(init.rejected, (state) => {
      state.error = 'Error';
      state.loading = false;
    })
  }
});

export const init = createAsyncThunk('posts/fetch', () => {
  return fetchPosts();
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;