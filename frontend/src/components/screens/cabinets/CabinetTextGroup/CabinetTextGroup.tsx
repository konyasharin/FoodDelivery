import { FC } from 'react';

type CabinetGroupProps = {
  title: string;
  content: string;
};

export const CabinetTextGroup: FC<CabinetGroupProps> = props => {
  return (
    <div>
      <span className={'text_bold'}>{`${props.title}: `}</span>
      <span className={'text'}>{props.content}</span>
    </div>
  );
};
