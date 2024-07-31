import { Input } from '@/components/ui/inputs/Input/Input.tsx';
import { FormInput } from '@/components/ui/inputs/FormInput/FormInput.tsx';

export const SignInPage = () => {
  return (
    <>
      <Input
        placeholder={'Введите ваше имя'}
        title={'Тест'}
        startContent={<div>Поиск</div>}
        endContent={<div>x</div>}
        error={'123'}
      />
      <FormInput placeholder={'123'} error={'Неверный email'} />
    </>
  );
};
