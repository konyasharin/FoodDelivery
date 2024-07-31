import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice.ts';
import promotionsReducer from './slices/promotionsSlice.ts';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    promotions: promotionsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
