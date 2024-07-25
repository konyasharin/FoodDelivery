import './App.css';
import { Container } from '@/components/layouts/Container/Container.tsx';
import { Header } from '@/components/layouts/Header/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage/MainPage.tsx';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
