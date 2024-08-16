import { FC } from 'react';
import { Typography } from '@/components/ui/Typography/Typography.tsx';
import styles from './CabinetTextGroup.module.css';

type CabinetGroupProps = {
  title: string;
  content: string;
};

export const CabinetTextGroup: FC<CabinetGroupProps> = props => {
  return (
    <div className={styles.text_group}>
      <Typography variant={'text_bold'}>{`${props.title}: `}</Typography>
      <Typography>{props.content}</Typography>
    </div>
  );
};
