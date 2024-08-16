import styles from './Promotions.module.css';
import { PromotionsSlider } from '@/components/shared/sliders/PromotionsSlider/PromotionsSlider.tsx';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

export const Promotions = () => {
  return (
    <section className={styles.promotions} id="promotions">
      <Typography tag={'h2'} variant={'h2'}>
        Акции
      </Typography>
      <PromotionsSlider />
    </section>
  );
};
