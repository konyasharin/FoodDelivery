import styles from './Main.module.css';
import { Button } from '@/components/ui/Button/Button.tsx';
import mainImage from '@/assets/MainImage.png';

export const Main = () => {
  return (
    <>
      <div className={styles.main_background}></div>
      <div className={styles.main}>
        <div>
          <h1>
            Всегда
            <br />
            свежая еда
          </h1>
          <Button
            onClick={() => console.log('Заказать еду')}
            variant={'primary'}
          >
            Заказать еду
          </Button>
        </div>
        <img src={mainImage} alt="mainImage" />
      </div>
    </>
  );
};
