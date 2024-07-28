import { FC, ReactNode, useMemo, useReducer } from 'react';
import {
  ActionType,
  GlobalStateType,
  StoreContext,
} from '@/context/StoreContext.ts';
import promotionImg from '@/assets/product.png';

type StoreProviderProps = {
  children?: ReactNode;
};

function reducer(state: GlobalStateType, action: ActionType): GlobalStateType {
  switch (action.type) {
    case 'setCartProduct':
      if (action.payload.count > 0) {
        const foundProduct = state.cart.products.find(
          product => product.id === action.payload.id,
        );
        return {
          ...state,
          cart: {
            ...state.cart,
            products: foundProduct
              ? state.cart.products.map(product => {
                  if (product.id === action.payload.id)
                    return { ...product, count: action.payload.count };
                  return product;
                })
              : { ...state.cart.products },
          },
        };
      }
      return state;
    case 'setPromotionIsActive':
      return {
        ...state,
        promotions: state.promotions.map(promotion => {
          if (promotion.id === action.payload.id)
            promotion.isActive = action.payload.isActive;
          return promotion;
        }),
      };
    default:
      throw new Error(`Action type ${action.type} doesn't exist.`);
  }
}

const initialState: GlobalStateType = {
  cart: {
    products: [
      {
        id: 0,
        count: 1,
      },
    ],
  },
  promotions: [
    {
      id: 0,
      title: 'Скидка 15%\nпри заказе от 899₽',
      endDate: '13 июля',
      img: promotionImg,
      isActive: false,
    },
    {
      id: 1,
      title: 'Скидка 20%\nпри заказе от 1999₽',
      endDate: '21 июля',
      img: promotionImg,
      isActive: false,
    },
  ],
};

export const StoreProvider: FC<StoreProviderProps> = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};
