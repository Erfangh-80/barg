import styled from 'styled-components';
import H1 from '../../atoms/H1/H1';
import { AddIcon } from '../../atoms/icon/AddIcon';
import { AddUserIcon } from '../../atoms/icon/AddUserIcon';
import { Input } from '../../atoms/input/input';
import { ButtonFilter } from '../../molecules/ButtonIcon/ButtonFilter';

export const PopupAddUser = () => {
  const BoxModal = styled.div`
    border-radius: 10px;
    border-top: 5px solid #35be9d;
    width: 40%;  
    box-shadow: 0px 4px 4px 6px rgba(143, 143, 143, 0.25);
    position: relative;
    margin: 5rem auto;
    padding-top: 3rem;
    padding-bottom: 2rem;
  `;

  const Div = styled.div`
    border-radius: 50%;
    border: 10px solid #f1f1f1;
    text-align: center;
    position: absolute;
    top: -65px; 
  `;

  return (
    <BoxModal>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Div>
          <AddUserIcon />
        </Div>
        <H1 fontSize="2rem">افزودن کاربر</H1>
        <Input
          placeholder="نام کاربر"
          borderColor="#939393"
          padding="5px 72px"
          width="90%"
          Margin="2rem 0px"
        />
        <div style={{ display: "flex", width: "90%" }}>
          <ButtonFilter
            text="افزودن کاربر"
            background="#35BE9D"
            backgroundHover="#137160"
            padding="3px 50px"
            color="#fff"
          >
            <AddIcon />
          </ButtonFilter>
        </div>
      </div>
    </BoxModal>
  );
};
