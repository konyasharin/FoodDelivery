import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store.ts';
import { createCounter } from '@/utils/helpers/counter/createCounter.ts';
import { Product } from '@/shared/types/Product.ts';
import { setCartProduct } from '@/store/slices/cartSlice.ts';
import { counterValidate } from '@/utils/helpers/counter/counterValidate.ts';
import { useEffect, useState } from 'react';
import { Counter } from '@/shared/types/Counter.ts';

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

  const createCounterHandle = (product: Product): Counter => {
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
            count: counterValidate(value + 1, min, max),
          }),
        );
      },
      onDecrement: () => {
        dispatch(
          setCartProduct({
            ...product,
            count: counterValidate(value - 1, min, max),
          }),
        );
      },
    };
  };

  return { cart, price, createCounterHandle };
};
