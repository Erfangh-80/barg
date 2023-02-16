import styled from 'styled-components';
import { Button } from '../../atoms/button/Botton';
import { ArrowRight } from '../../atoms/icon/Arrow-Right';

export const ButtonArrowRight = ({ text, color, background, padding, onClick }: Button) => {

  

  return (
    <Button
      onClick={onClick}
      text={text}
      color={color}
      background={background}
      padding={padding}
      backgroundHover={"#35BE9D "}
    >
      <ArrowRight margin="1px 1px 1px 10px" />
    </Button>
  );
};
