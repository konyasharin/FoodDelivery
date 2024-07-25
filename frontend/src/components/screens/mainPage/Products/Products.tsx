import styles from './Products.module.css';
import { Button } from '@/components/ui/Button/Button.tsx';
import { useSelect } from '@/hooks/useSelect.ts';
import { useCount } from '@/hooks/useCount.ts';

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
  const { value, increment, decrement } = useCount();
  return (
    <section className={styles.products}>
      <h2 className={styles.title}>Продукты</h2>
      <div className={styles.categories}>
        {...categories.map((category, i) => {
          return (
            <Button
              onClick={() => setActiveCategory(i)}
              variant={'outline'}
              className={i === activeCategory ? styles.category_active : null}
            >
              {category}
            </Button>
          );
        })}
      </div>

      <div>{value}</div>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </section>
  );
};
