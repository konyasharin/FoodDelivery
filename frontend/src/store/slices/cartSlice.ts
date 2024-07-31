import { ProductType } from '@/shared/types/ProductType.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import productImg from '@/assets/product.png';

type CartStateType = {
  products: (ProductType & { count: number })[];
};

const initialState: CartStateType = {
  products: [
    {
      id: 0,
      title: 'Мороженое "Клубничный взрыв"',
      description:
        'Очень вкусное мороженое Очень вкусное мороженое Очень вкусное мороженое  Очень вкусное мороженое',
      img: productImg,
      price: 123,
      count: 3,
    },
  ],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartProduct: (
      state,
      action: PayloadAction<ProductType & { count: number }>,
    ) => {
      const productIsExists =
        state.products.find(product => product.id === action.payload.id) !=
        null;
      if (action.payload.count <= 0 && productIsExists) {
        for (let i = 0; i < state.products.length; i++) {
          if (state.products[i].id === action.payload.id) {
            state.products.splice(i, 1);
            return;
          }
        }
      } else if (action.payload.count > 0 && productIsExists) {
        state.products = state.products.map(product => {
          if (product.id === action.payload.id) {
            product.count = action.payload.count;
          }
          return product;
        });
      } else if (action.payload.count > 0 && !productIsExists) {
        state.products.push(action.payload);
      }
    },
  },
});

export const { setCartProduct } = cartSlice.actions;
export default cartSlice.reducer;
