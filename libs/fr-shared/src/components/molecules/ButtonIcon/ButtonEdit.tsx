import styled from 'styled-components';
import { Button } from '../../atoms/button/Botton';
import { UpdateIcon } from '../../atoms/icon/UpdateIcon';

export const ButtonEdit = ({
  text,
  color,
  background,
  padding,
  onClick,
}: Button) => {
  return (
    <Button
      onClick={onClick}
      text={text}
      color={color}
      background={background}
      padding={padding}
    >
      <UpdateIcon margin="1px 1px 1px 10px" />
    </Button>
  );
};
