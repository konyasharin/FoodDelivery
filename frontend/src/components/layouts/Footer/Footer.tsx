import styles from './Footer.module.css';
import { Container } from '@/components/layouts/Container/Container.tsx';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>© Все права защищены 2024</Container>
    </div>
  );
};
