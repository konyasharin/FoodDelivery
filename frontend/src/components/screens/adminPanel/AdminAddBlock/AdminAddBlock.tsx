import { Wrapper } from '@/components/shared/Wrapper/Wrapper.tsx';
import { FC } from 'react';
import { Typography } from '@/components/ui/Typography/Typography.tsx';
import styles from './AdminAddBlock.module.css';
import { AddIcon } from '@/components/icons/AddIcon.tsx';
import { Link } from 'react-router-dom';

type AdminAddBlockProps = {
  description: string;
  to: string;
};

export const AdminAddBlock: FC<AdminAddBlockProps> = props => {
  return (
    <Link to={props.to} className={styles.link}>
      <Wrapper className={styles.block}>
        <AddIcon />
        <Typography variant={'text_small'}>{props.description}</Typography>
      </Wrapper>
    </Link>
  );
};
