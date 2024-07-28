import { Main } from '@/components/screens/mainPage/Main/Main.tsx';
import { Products } from '@/components/screens/mainPage/Products/Products.tsx';
import { Promotions } from '@/components/screens/mainPage/Promotions/Promotions.tsx';

export const MainPage = () => {
  return (
    <>
      <Main />
      <Products />
      <Promotions />
    </>
  );
};
