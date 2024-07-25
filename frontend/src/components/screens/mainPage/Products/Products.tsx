import styles from './Products.module.css';
import { Button } from '@/components/ui/Button/Button.tsx';

export const Products = () => {
  return (
    <section className={styles.products}>
      <h2 className={styles.title}>Продукты</h2>
      <div className={styles.categories}>
        <Button onClick={() => console.log('категория')} variant={'outline'}>
          Бургеры
        </Button>
        <Button onClick={() => console.log('категория')} variant={'outline'}>
          Пицца
        </Button>
        <Button onClick={() => console.log('категория')} variant={'outline'}>
          Суши
        </Button>
        <Button onClick={() => console.log('категория')} variant={'outline'}>
          Десерты
        </Button>
        <Button onClick={() => console.log('категория')} variant={'outline'}>
          Завтрак
        </Button>
        <Button
          onClick={() => console.log('категория')}
          variant={'outline'}
          className={styles.category_active}
        >
          Обед
        </Button>
        <Button onClick={() => console.log('категория')} variant={'outline'}>
          Ужин
        </Button>
      </div>
    </section>
  );
};
