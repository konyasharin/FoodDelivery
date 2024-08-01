import { InputGroup } from '@/components/ui/inputs/InputGroup/InputGroup.tsx';
import { Input } from '@/components/ui/inputs/Input/Input.tsx';
import { InputAddon } from '@/components/ui/inputs/InputAddon/InputAddon.tsx';

export const SignInPage = () => {
  return (
    <>
      <InputGroup>
        <InputAddon location={'left'}>123</InputAddon>
        <Input />
        <InputAddon location={'right'}>123</InputAddon>
      </InputGroup>
    </>
  );
};
