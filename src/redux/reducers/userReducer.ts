import { IUser } from '../models/userModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  user: IUser;
  errorUser?: string | undefined;
};

const initialState: UserState = {
  user: {
    nome: '',
    sobrenome: '',
    email: '',
    cpf: '',
    telefone: '',
  },
  errorUser: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
