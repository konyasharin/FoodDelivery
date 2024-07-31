import './App.css';
import { Container } from '@/components/layouts/Container/Container.tsx';
import { Header } from '@/components/layouts/Header/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage/MainPage.tsx';
import { Footer } from '@/components/layouts/Footer/Footer.tsx';
import { BASKET, MAIN } from '@/shared/routes/routes.ts';
import { BasketPage } from '@/pages/BasketPage/BasketPage.tsx';
import { Provider } from 'react-redux';
import { store } from '@/store/store.ts';

function App() {
  return (
    <div className={'app'}>
      <Provider store={store}>
        <Header />
        <Container className={'main_container'}>
          <Routes>
            <Route path={MAIN} element={<MainPage />} />
            <Route path={BASKET} element={<BasketPage />} />
          </Routes>
        </Container>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
