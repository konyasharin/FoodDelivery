import { SubmitHandler, useForm } from 'react-hook-form';
import { Form } from '@/components/ui/Form/Form.tsx';
import { FormInput } from '@/components/shared/inputs/FormInput/FormInput.tsx';
import {
  EMAIL_IS_REQUIRED,
  EMAIL_PATTERN_INCORRECT,
  PASSWORD_IS_REQUIRED,
  PASSWORD_LENGTH_MORE_MAX,
} from '@/shared/constants/errors.ts';
import { EMAIL_PATTERN } from '@/shared/constants/patterns.ts';
import { Button } from '@/components/ui/Button/Button.tsx';
import styles from './RegistrationPage.module.css';
import { MAX_PASSWORD_LENGTH } from '@/shared/constants/values.ts';
import { SIGN_IN } from '@/shared/constants/routes.ts';
import clsx from 'clsx';

type RegistrationForm = {
  email: string;
  password: string;
  repeatPassword: string;
};

export const RegistrationPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<RegistrationForm>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const onSubmit: SubmitHandler<RegistrationForm> = data => {
    console.log(data);
  };
  return (
    <Form title={'Регистрация'} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormInput
          placeholder={'Электронная почта'}
          className={styles.input}
          error={errors.email?.message}
          {...register('email', {
            required: EMAIL_IS_REQUIRED,
            pattern: { value: EMAIL_PATTERN, message: EMAIL_PATTERN_INCORRECT },
          })}
        />
        <FormInput
          placeholder={'Пароль'}
          className={styles.input}
          error={errors.password?.message}
          type={'password'}
          {...register('password', {
            required: PASSWORD_IS_REQUIRED,
            maxLength: {
              value: MAX_PASSWORD_LENGTH,
              message: PASSWORD_LENGTH_MORE_MAX,
            },
          })}
        />
        <FormInput
          placeholder={'Повторите пароль'}
          className={styles.input}
          error={errors.repeatPassword?.message}
          type={'password'}
          {...register('repeatPassword', {
            required: 'Введите повторно пароль',
            validate: value => {
              if (value != getValues().password) return 'Пароли не совпадают';
            },
          })}
        />
      </div>
      <Button type={'submit'} variant={'primary'} className={styles.button}>
        Зарегистрироваться
      </Button>
      <Button
        to={SIGN_IN}
        className={clsx('text', styles.to_sign_in)}
        type={'button'}
      >
        Уже есть аккаунт? Войти
      </Button>
    </Form>
  );
};
