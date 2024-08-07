import { User } from '@/shared/types/User.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ROLES } from '@/shared/types/UserRole.ts';

type UserState = {
  userInfo?: User;
};

const initialState: UserState = {
  userInfo: {
    role: ROLES.DELIVERYMAN,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
