import { Promotion } from '@/shared/types/Promotion.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import productImg from '@/assets/product.png';

type PromotionsState = {
  promotionsList: Promotion[];
};

const initialState: PromotionsState = {
  promotionsList: [
    {
      id: 0,
      title: 'Скидка 15% \n' + 'при заказе от 899₽',
      endDate: '13 июня',
      img: productImg,
      isActive: false,
    },
    {
      id: 2,
      title: 'Скидка 20% \n' + 'при заказе от 1999₽',
      endDate: '15 июня',
      img: productImg,
      isActive: false,
    },
  ],
};

const promotionsSlice = createSlice({
  name: 'promotions',
  initialState,
  reducers: {
    setPromotionActive: (
      state,
      action: PayloadAction<Pick<Promotion, 'id'>>,
    ) => {
      state.promotionsList.map(promotion => {
        promotion.isActive = promotion.id === action.payload.id;
        return promotion;
      });
    },
  },
});

export const { setPromotionActive } = promotionsSlice.actions;
export default promotionsSlice.reducer;
