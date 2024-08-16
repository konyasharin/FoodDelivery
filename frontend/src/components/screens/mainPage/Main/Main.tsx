import styles from './Main.module.css';
import { Button } from '@/components/ui/Button/Button.tsx';
import mainImage from '@/assets/MainImage.png';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

export const Main = () => {
  return (
    <>
      <div className={styles.main_background}></div>
      <div className={styles.main}>
        <div>
          <Typography tag={'h1'} variant={'h1'}>
            Всегда
            <br />
            свежая еда
          </Typography>
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
