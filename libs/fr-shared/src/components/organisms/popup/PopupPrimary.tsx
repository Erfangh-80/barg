import styled from 'styled-components';
import H1 from '../../atoms/H1/H1';
import P from '../../atoms/Paragraph/Paragraph';
import { TicIcon } from '../../atoms/icon/ticIcon';
import { Button } from '../../atoms/button/Botton';
import { ButtonEdit } from '../../molecules/ButtonIcon/ButtonEdit';

export const PopUpPrimary = () => {
  const ModalBox = styled.div`
    width: 500px;
    box-shadow: 0px 4px 4px 6px rgba(143, 143, 143, 0.25);
    border-radius: 10px;
    border-top: 10px solid #35be9d;
    text-align: center;
    position: relative;
    
    h1 {
      padding: 50px 72px;
      font-weight: 500;
      font-size: 32px;
    }
    p {
      padding: 0px 73px;
      padding-bottom: 2rem;
    }
  `;
  const TitleModal = styled.div`
    border-radius: 50%;
    border: 10px solid #f1f1f1;
    text-align: center;
    position: absolute;
    top: -65px;
    left: 200px;
  `;

  const ActionModal = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    border-top: 1px solid #939393;
    padding-top: 2rem;
    padding-bottom: 2rem;
  `;

  return (
    <ModalBox>
      <TitleModal>
        <TicIcon />
      </TitleModal>
      <H1>تایید نهایی درخواست</H1>
      <P text="لطفا توجه نمایید که بعداز تایید نهایی تمامی مسئولیت این درخواست بر عهده شماست." />
      <ActionModal>
        <Button
          text="تایید نهایی"
          background="#35BE9D"
          backgroundHover="#137160"
          color="#fff"
          padding="3px 72px"
        />
        <ButtonEdit
          text="ویرایش"
          background="#fff"
          color="#000"
          padding="3px 72px"
        />
      </ActionModal>
    </ModalBox>
  );
};
