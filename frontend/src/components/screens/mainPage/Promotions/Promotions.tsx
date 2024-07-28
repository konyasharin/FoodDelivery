import styles from './Promotions.module.css';
import { PromotionsSlider } from '@/components/shared/sliders/PromotionsSlider/PromotionsSlider.tsx';

export const Promotions = () => {
  return (
    <section className={styles.promotions}>
      <h2>Акции</h2>
      <PromotionsSlider />
    </section>
  );
};
