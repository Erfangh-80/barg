import { useState } from 'react';
import styled from 'styled-components';
import {
  // SearchBox,
  Button,
  // Input,
  // PopUpPrimary,
  // PopUpRed,
  // PopUpGreen,
  // PopupAddUser,
  PopupFilter,
  ButtonFilter,
  ButtonEdit,
  ButtonArrowRight,
  PopUpGreen,
  PopUpRed,
  PopUpPrimary,
  PopupAddUser,
  SearchBox,
  Input
} from '@barg/fr-shared';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const [isShow, setIsShow] = useState(true);

  const clickHandler = () => {
    setIsShow(!isShow);
  };

  return (
    <StyledPage>
      {/* button */}
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <Button
          text="ثبت درخواست"
          color="#F1FFFE"
          background="#35BE9D"
          backgroundHover="#137160"
          padding="5px 72px"
        />
        <Button
          text="تایید درخواست"
          color="#F1FFFE"
          background="#38C621"
          backgroundHover="#259513"
          padding="5px 72px"
        />
        <Button
          text="لغو درخواست"
          color="#F1FFFE"
          background="#FD2E2E"
          backgroundHover="#CE1313"
          padding="5px 72px"
        />
      </div>
      {/* filters box */}
      {/*<div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginTop: '3rem',
        }}
      >
        
        <div>
          <ButtonEdit
            background="#fff"
            color="#595959"
            text="ویرایش"
            padding="5px 72px"
          />
        </div>
        <div>
          <ButtonArrowRight
            background="#fff"
            color="#35BE9D"
            text="لیست کارمندان"
            padding="5px 50px"
          />
        </div>
        <div>
          <ButtonArrowRight
            background="#fff"
            color="#35BE9D"
            text="لیست سازمان ها"
            padding="5px 50px"
          />
        </div>
      </div> */}
      {/* -------------------------------------------------------- */}
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "5rem", flexWrap: "wrap" }}>
        <PopUpPrimary />
        {/* <PopUpRed />
        <PopUpGreen /> */}
      </div>
      {/* <PopupAddUser /> */}
        
      {/* <PopupFilter isShow={false} /> */}
      {/* <div>
          <ButtonFilter
            onClick={clickHandler}
            background="#fff"
            color="#35BE9D"
            text="فیلتر"
            padding="5px 48px"
          />
          // <PopupFilter isShow={isShow} />
        </div> */}
      {/* <div style={{ marginTop: "2rem" }}>
        <Input placeholder='سازمان کار و امور اجتمماعی' borderColor='#35BE9D' padding='7px 25px' width='600px'/>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <Input placeholder='نام سازمان' borderColor='#35BE9D' padding='7px 25px' width='600px'/>
      </div>
      
      <SearchBox /> */}
    </StyledPage>
  );
}

export default Index;
