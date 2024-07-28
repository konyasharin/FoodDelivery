import { Slider } from '@/components/shared/sliders/Slider/Slider.tsx';
import { useContext } from 'react';
import { Button } from '@/components/ui/Button/Button.tsx';
import styles from './PromotionsSlider.module.css';
import { useSelect } from '@/hooks/useSelect.ts';
import { StoreContext } from '@/context/StoreContext.ts';

export const PromotionsSlider = () => {
  const { state, dispatch } = useContext(StoreContext);
  const [activePromotionIndex, setActivePromotionIndex] = useSelect(
    state.promotions,
  );
  const activePromotion = state.promotions[activePromotionIndex];
  return (
    <Slider
      countElements={state.promotions.length}
      activeElemIndex={activePromotionIndex}
      setActiveElemIndex={index => setActivePromotionIndex(index)}
    >
      <div className={styles.blocks}>
        <div className={styles.left_block}>
          <h3>{activePromotion.title}</h3>
          <span className={'text_bold'}>до {activePromotion.endDate}</span>
          <Button
            variant={activePromotion.isActive ? 'primary' : 'outline'}
            onClick={() => {
              for (let i = 0; i < state.promotions.length; i++) {
                dispatch({
                  type: 'setPromotionIsActive',
                  payload: {
                    id: state.promotions[i].id,
                    isActive: false,
                  },
                });
              }
              dispatch({
                type: 'setPromotionIsActive',
                payload: { id: activePromotionIndex, isActive: true },
              });
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
