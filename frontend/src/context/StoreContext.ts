import { createContext, Dispatch } from 'react';
import { Promotion } from '@/shared/types/Promotion.ts';

export type GlobalStateType = {
  cart: {
    products: {
      id: number;
      count: number;
    }[];
  };
  promotions: Promotion[];
};

export type ActionType =
  | { type: 'setCartProduct'; payload: { id: number; count: number } }
  | {
      type: 'removeFromCart';
      payload: { id: number };
    }
  | {
      type: 'setPromotionIsActive';
      payload: { id: number; isActive: boolean };
    };

export const StoreContext = createContext<{
  state: GlobalStateType;
  dispatch: Dispatch<ActionType>;
}>({
  state: {
    cart: {
      products: [],
    },
    promotions: [],
  },
  dispatch: () => {},
});
