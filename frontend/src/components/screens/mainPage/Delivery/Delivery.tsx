import styles from './Delivery.module.css';
import { DeliveryBlock } from '@/components/screens/mainPage/DeliveryBlock/DeliveryBlock.tsx';
import computerIcon from '@/assets/computer.svg';
import { Placemark, Map, YMaps } from '@pbe/react-yandex-maps';

export const Delivery = () => {
  return (
    <section className={styles.delivery}>
      <h2>Доставка</h2>
      <div className={styles.blocks}>
        <div className={styles.delivery_blocks}>
          <DeliveryBlock
            className={styles.block}
            title={'Способы заказа'}
            elements={[
              {
                title: 'На сайте',
                description: 'Выберите продукты на сайте и оформите заказ',
                icon: computerIcon,
              },
              {
                title: 'На сайте',
                description: 'Выберите продукты на сайте и оформите заказ',
                icon: computerIcon,
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
                icon: computerIcon,
              },
            ]}
          />
        </div>
        <div className={styles.map_block}>
          <h3>Мы на карте</h3>
          <YMaps>
            <Map
              className={styles.map}
              defaultState={{
                center: [56.042709, 92.880445],
                zoom: 10,
              }}
            >
              <Placemark geometry={[56.042709, 92.880445]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </section>
  );
};
