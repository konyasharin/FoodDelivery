import styles from './Delivery.module.css';
import { DeliveryBlock } from '@/components/screens/mainPage/DeliveryBlock/DeliveryBlock.tsx';
import { useEffect } from 'react';
import * as tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { Typography } from '@/components/ui/Typography/Typography.tsx';
import { ComputerIcon } from '@/components/icons/ComputerIcon.tsx';

export const Delivery = () => {
  useEffect(() => {
    const map = tt.map({
      key: import.meta.env.APP_MAP_API_KEY,
      container: 'map-container',
      style:
        'https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBAR0M4WkowbWJMM3BjQ1BWQTthMjVhNDQzZC1kZWM2LTQyYTQtYmViMy02ZjEwYzQ4MTk2YWY=/drafts/0.json',
      center: [92.880445, 56.042709],
      zoom: 11,
      language: 'ru',
    });
    new tt.Marker().setLngLat([92.880445, 56.042709]).addTo(map);
    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());
    return () => map.remove();
  }, []);

  return (
    <section className={styles.delivery} id={'delivery'}>
      <Typography tag={'h2'} variant={'h2'}>
        Доставка
      </Typography>
      <div className={styles.blocks}>
        <div className={styles.delivery_blocks}>
          <DeliveryBlock
            className={styles.block}
            title={'Способы заказа'}
            elements={[
              {
                title: 'На сайте',
                description: 'Выберите продукты на сайте и оформите заказ',
                icon: <ComputerIcon />,
              },
              {
                title: 'На сайте',
                description: 'Выберите продукты на сайте и оформите заказ',
                icon: <ComputerIcon />,
              },
            ]}
          />
          <DeliveryBlock
            className={styles.block}
            title={'Способы получения'}
            elements={[
              {
                title: 'Доставка',
                description:
                  'Доставим заказ в течение часа\n' +
                  'Стоимость доставки изменяется в зависимости от спроса\n' +
                  '\n' +
                  'Время работы: 9:00 - 21:00',
                icon: <ComputerIcon />,
              },
            ]}
          />
        </div>
        <div className={styles.map_block}>
          <Typography tag={'h3'} variant={'h3'}>
            Мы на карте
          </Typography>
          <div id={'map-container'} className={styles.map}></div>
        </div>
      </div>
    </section>
  );
};
