import { ComponentProps } from 'react';
import clsx from 'clsx';
import styles from './Typography.module.css';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'text_small'
  | 'text_upper'
  | 'text_bold'
  | 'text';
type TypographyProps<Tag extends TypographyTag> = ComponentProps<Tag> & {
  tag?: TypographyTag;
  variant?: TypographyVariant;
};

export const Typography = <Tag extends 'p'>({
  variant = 'text',
  tag = 'p',
  children,
  className,
  ...attributes
}: TypographyProps<Tag>) => {
  const Component = tag;
  return (
    <Component className={clsx(styles[variant], className)} {...attributes}>
      {children}
    </Component>
  );
};
