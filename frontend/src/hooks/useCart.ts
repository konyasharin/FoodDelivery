import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store.ts';
import { createCounter } from '@/utils/helpers/counter/createCounter.ts';
import { ProductType } from '@/shared/types/ProductType.ts';
import { setCartProduct } from '@/store/slices/cartSlice.ts';
import {
  decrementValidate,
  incrementValidate,
} from '@/utils/helpers/counter/validate.ts';
import { useEffect, useState } from 'react';
import { CounterType } from '@/shared/types/CounterType.ts';

export const useCart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const getPrice = () =>
    cart.products.reduce(
      (acc, current) => acc + current.price * current.count,
      0,
    );
  const [price, setPrice] = useState(getPrice());

  useEffect(() => {
    setPrice(getPrice());
  }, [cart]);

  const createCounterHandle = (product: ProductType): CounterType => {
    const count =
      cart.products.find(cartProduct => cartProduct.id === product.id)?.count ??
      0;
    const { min, max, value } = createCounter({
      initialValue: count,
      min: 0,
    });
    return {
      value: value,
      onIncrement: () => {
        dispatch(
          setCartProduct({
            ...product,
            count: incrementValidate(value, 1, max),
          }),
        );
      },
      onDecrement: () => {
        dispatch(
          setCartProduct({
            ...product,
            count: decrementValidate(value, 1, min),
          }),
        );
      },
    };
  };

  return { cart, price, createCounterHandle };
};
