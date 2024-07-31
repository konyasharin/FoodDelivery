import { Slider } from '@/components/shared/sliders/Slider/Slider.tsx';
import { Button } from '@/components/ui/Button/Button.tsx';
import styles from './PromotionsSlider.module.css';
import { useSelect } from '@/hooks/useSelect.ts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store.ts';
import { setPromotionActive } from '@/store/slices/promotionsSlice.ts';

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
          <h3>{activePromotion.title}</h3>
          <span className={'text_bold'}>до {activePromotion.endDate}</span>
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
