import styled from 'styled-components';
import { SearchIcon } from '../../atoms/icon/SearchIcon';
import { Input } from '../../atoms/input/input';

export const SearchBox = () => {
  const Div = styled.div`
    position: relative;
    display: flex;
    top: 0;
  `;

  const Box1 = styled.div`
    background-color: #35BE9D;
    padding: 6px 1rem;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    position: absolute;
  `;


  return (
    <Div>
      <Box1>
        <SearchIcon />
      </Box1>
        <Input padding='9px' width='500px' placeholder='نام یا کد سازمان را وارد کنید' borderColor='#CBCBCB'/>
    </Div>
  );
};
