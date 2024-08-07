import { FC } from 'react';
import styles from './CabinetTextGroup.module.css';

type CabinetGroupProps = {
  title: string;
  content: string;
};

export const CabinetTextGroup: FC<CabinetGroupProps> = props => {
  return (
    <div className={styles.text_group}>
      <span className={'text_bold'}>{`${props.title}: `}</span>
      <span className={'text'}>{props.content}</span>
    </div>
  );
};
