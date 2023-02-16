import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms/button/Botton';
import { ArrowDown } from '../../atoms/icon/Arrow-Down';
import Paragraph from '../../atoms/Paragraph/Paragraph';

interface PopupProps {
  isShow: boolean;
}

export const PopupFilter = ({ isShow }: PopupProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const Box = styled.div`
    width: 500px;
    border: 1px solid #cbcbcbb7;
    box-shadow: 0px 4px 3px 3px #0000003e;
    border-radius: 25px;
    transition: 0.6s ease-in-out;
    opacity: ${isShow ? '1' : '0'};
    max-height: ${isShow ? '500px' : '0px'};
    overflow: hidden;
  `;

  const Div = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    width: 90%;
    margin: 0px auto;
    border-bottom: 1px solid #cbcbcb;
    span {
      margin-left: 1rem;
    }
  `;

  const Div2 = styled.div`
    background: #f1f1f1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    flex-wrap: wrap;
    p {
      flex-wrap: wrap;
      padding: 3px 50px;
      margin: 5px;
      background-color: #fff;
      border-radius: 1rem;
    }
  `;

  return (
    <Box>
      <Div onClick={() => setIsOpen(!isOpen)}>
        <ArrowDown />
        <span>وضعیت</span>
      </Div>
      {isOpen && (
        <Div2>
          <Paragraph padding="2px 57px" text="درحال آماده سازی" />
          <Paragraph padding="2px 57px" text="ارسال شده" />
          <Paragraph padding="2px 57px" text="تایید شده" />
          <Paragraph padding="2px 57px" text="تحویل داده شده" />
          <Paragraph padding="2px 57px" text="رد شده" />
          <Paragraph padding="2px 57px" text="دریافت شده" />
          <Paragraph padding="2px 57px" text="همه" />
        </Div2>
      )}
      <div style={{ padding: '2rem' }}>
        <Button
          text="اعمال فیلتر"
          padding="7px 179px 11px 182px"
          background="#35BE9D"
          backgroundHover="#137160"
          color="#fff"
        />
      </div>
    </Box>
  );
};
