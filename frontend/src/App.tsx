import './App.css';
import { Container } from '@/components/layouts/Container/Container.tsx';
import { Header } from '@/components/layouts/Header/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage/MainPage.tsx';
import { Footer } from '@/components/layouts/Footer/Footer.tsx';
import {
  BASKET,
  DELIVERYMAN_CABINET,
  MAIN,
  REGISTRATION,
  SIGN_IN,
} from '@/shared/constants/routes.ts';
import { BasketPage } from '@/pages/BasketPage/BasketPage.tsx';
import { Provider } from 'react-redux';
import { store } from '@/store/store.ts';
import { SignInPage } from '@/pages/SignInPage/SignInPage.tsx';
import { RegistrationPage } from '@/pages/RegistrationPage/RegistrationPage.tsx';
import { DeliverymanCabinetPage } from '@/pages/DeliverymanCabinetPage/DeliverymanCabinetPage.tsx';

function App() {
  return (
    <div className={'app'}>
      <Provider store={store}>
        <Header />
        <Container className={'main_container'}>
          <Routes>
            <Route path={MAIN} element={<MainPage />} />
            <Route path={BASKET} element={<BasketPage />} />
            <Route path={SIGN_IN} element={<SignInPage />} />
            <Route path={REGISTRATION} element={<RegistrationPage />} />
            <Route
              path={DELIVERYMAN_CABINET}
              element={<DeliverymanCabinetPage />}
            />
            <Route path={'*'} element={<div>error 404</div>} />
          </Routes>
        </Container>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
