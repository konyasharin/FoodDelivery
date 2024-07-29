import styles from './Products.module.css';
import { Button } from '@/components/ui/Button/Button.tsx';
import { useSelect } from '@/hooks/useSelect.ts';
import { VerticalProductCard } from '@/components/shared/productCards/VerticalProductCard/VerticalProductCard.tsx';
import productImg from '@/assets/product.png';

export const Products = () => {
  const categories = [
    'Бургеры',
    'Пицца',
    'Суши',
    'Десерты',
    'Завтрак',
    'Обед',
    'Ужин',
  ];
  const [activeCategory, setActiveCategory] = useSelect(categories);
  return (
    <section className={styles.products} id={'products'}>
      <h2 className={styles.title}>Продукты</h2>
      <div className={styles.categories}>
        {...categories.map((category, i) => {
          return (
            <Button
              onClick={() => setActiveCategory(i)}
              variant={'outline'}
              className={
                i === activeCategory ? styles.category_active : undefined
              }
            >
              {category}
            </Button>
          );
        })}
      </div>
      <div className={styles.cards}>
        <VerticalProductCard
          title={'Мороженое "Клубничный взрыв"'}
          description={
            'Очень вкусное мороженое Очень вкусное мороженое Очень вкусное мороженое  Очень вкусное мороженое '
          }
          price={123}
          img={productImg}
          className={styles.card}
        />
        <VerticalProductCard
          title={'Мороженое "Клубничный взрыв"'}
          description={
            'Очень вкусное мороженое Очень вкусное мороженое Очень вкусное мороженое  Очень вкусное мороженое '
          }
          price={123}
          img={productImg}
          className={styles.card}
        />
        <VerticalProductCard
          title={'Мороженое "Клубничный взрыв"'}
          description={
            'Очень вкусное мороженое Очень вкусное мороженое Очень вкусное мороженое  Очень вкусное мороженое '
          }
          price={123}
          img={productImg}
          className={styles.card}
        />
      </div>
      <Button
        onClick={() => console.log('Показать еще')}
        className={styles.show_more_btn}
        variant={'primary'}
      >
        Показать еще...
      </Button>
    </section>
  );
};
