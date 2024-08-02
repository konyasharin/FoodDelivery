import { Form } from '@/components/ui/Form/Form.tsx';
import { ErrorBlock } from '@/components/shared/ErrorBlock/ErrorBlock.tsx';
import { InputGroup } from '@/components/shared/inputParts/InputGroup/InputGroup.tsx';
import { Input } from '@/components/ui/Input/Input.tsx';
import styles from './SignInPage.module.css';
import { Button } from '@/components/ui/Button/Button.tsx';
import clsx from 'clsx';
import { REGISTRATION } from '@/shared/routes/routes.ts';

export const SignInPage = () => {
  return (
    <Form title={'Вход'}>
      <div>
        <ErrorBlock className={styles.input_block}>
          <InputGroup>
            <Input
              placeholder={'Электронная почта'}
              type={'email'}
              variant={'underlined'}
            />
          </InputGroup>
        </ErrorBlock>
        <ErrorBlock className={styles.input_block}>
          <InputGroup>
            <Input
              placeholder={'Пароль'}
              type={'password'}
              variant={'underlined'}
            />
          </InputGroup>
        </ErrorBlock>
      </div>
      <Button
        className={clsx(styles.default_button, styles.forget_password)}
        variant={'default'}
      >
        Забыли пароль?
      </Button>
      <Button className={styles.submit} variant={'primary'}>
        Войти
      </Button>
      <Button
        className={clsx(styles.default_button, styles.to_registration)}
        variant={'default'}
        to={REGISTRATION}
      >
        Нет аккаунта? Регистрация
      </Button>
    </Form>
  );
};
