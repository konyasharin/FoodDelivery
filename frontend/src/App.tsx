import './App.css';
import { Container } from '@/components/layouts/Container/Container.tsx';
import { Header } from '@/components/layouts/Header/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage/MainPage.tsx';
import { StoreProvider } from '@/context/StoreProvider.tsx';

function App() {
  return (
    <StoreProvider>
      <Header />
      <Container>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Container>
    </StoreProvider>
  );
}

export default App;
