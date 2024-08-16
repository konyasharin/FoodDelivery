import { Slider } from '@/components/shared/sliders/Slider/Slider.tsx';
import { Button } from '@/components/ui/Button/Button.tsx';
import styles from './PromotionsSlider.module.css';
import { useSelect } from '@/hooks/useSelect.ts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store.ts';
import { setPromotionActive } from '@/store/slices/promotionsSlice.ts';
import { Typography } from '@/components/ui/Typography/Typography.tsx';

export const PromotionsSlider = () => {
  const promotions = useSelector(
    (state: RootState) => state.promotions.promotionsList,
  );
  const dispatch = useDispatch();
  const [activePromotionIndex, setActivePromotionIndex] = useSelect(
    promotions.length,
  );
  const activePromotion = promotions[activePromotionIndex];
  return (
    <Slider
      countElements={promotions.length}
      activeElemIndex={activePromotionIndex}
      setActiveElemIndex={index => setActivePromotionIndex(index)}
    >
      <div className={styles.promotion_slider}>
        <div className={styles.left_block}>
          <Typography tag={'h3'} variant={'h3'}>
            {activePromotion.title}
          </Typography>
          <Typography variant={'text_bold'}>
            до {activePromotion.endDate}
          </Typography>
          <Button
            variant={activePromotion.isActive ? 'primary' : 'outline'}
            onClick={() => {
              dispatch(setPromotionActive({ id: activePromotion.id }));
            }}
          >
            {activePromotion.isActive ? 'Применено' : 'Применить'}
          </Button>
        </div>
        <img src={activePromotion.img} alt="Акция" />
      </div>
    </Slider>
  );
};
