import { Form } from '@/components/ui/Form/Form.tsx';
import styles from './SignInPage.module.css';
import { Button } from '@/components/ui/Button/Button.tsx';
import clsx from 'clsx';
import { REGISTRATION } from '@/shared/constants/routes.ts';
import { FormInput } from '@/components/shared/inputs/FormInput/FormInput.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EMAIL_PATTERN } from '@/shared/constants/patterns.ts';
import {
  EMAIL_IS_REQUIRED,
  EMAIL_PATTERN_INCORRECT,
  PASSWORD_IS_REQUIRED,
  PASSWORD_LENGTH_MORE_MAX,
} from '@/shared/constants/errors.ts';
import { MAX_PASSWORD_LENGTH } from '@/shared/constants/values.ts';

type SignInForm = {
  email: string;
  password: string;
};

export const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const onSubmit: SubmitHandler<SignInForm> = data => {
    console.log(data);
  };

  return (
    <Form title={'Вход'} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormInput
          placeholder={'Электронная почта'}
          className={styles.input_block}
          error={errors.email?.message}
          {...register('email', {
            required: EMAIL_IS_REQUIRED,
            pattern: {
              value: EMAIL_PATTERN,
              message: EMAIL_PATTERN_INCORRECT,
            },
          })}
        />
        <FormInput
          placeholder={'Пароль'}
          type={'password'}
          className={styles.input_block}
          error={errors.password?.message}
          {...register('password', {
            required: PASSWORD_IS_REQUIRED,
            maxLength: {
              value: MAX_PASSWORD_LENGTH,
              message: PASSWORD_LENGTH_MORE_MAX,
            },
          })}
        />
      </div>
      <Button
        className={clsx('text', styles.forget_password)}
        variant={'default'}
        type={'button'}
      >
        Забыли пароль?
      </Button>
      <Button type={'submit'} className={styles.submit} variant={'primary'}>
        Войти
      </Button>
      <Button
        className={clsx('text', styles.to_registration)}
        variant={'default'}
        to={REGISTRATION}
        type={'button'}
      >
        Нет аккаунта? Регистрация
      </Button>
    </Form>
  );
};
