import styled from 'styled-components';
import { Button } from '../../atoms/button/Botton';
import { FilterIcon } from "../../atoms/icon/FilterIcon"


export const ButtonFilter = ({ text, color, background, padding, onClick } : Button) => {
  
  const IcButton = styled(Button)`
    border: 5px solid #000;
  `;

  return (
    <IcButton onClick={onClick} text={text} color={color} background={background} padding={padding}>
      <FilterIcon margin="1px 10px 1px 0px" />
    </IcButton>
  );
};
