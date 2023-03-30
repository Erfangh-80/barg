import Image from 'next/image';
import styled from 'styled-components';
import ImageLogin from '../../../utils/images/Login.png';
import Logo from '../../../utils/images/Logo.png';
import { H1 } from '../../atoms/H1/H1';
import { Login } from '../../organisms/Login/Login';
import { Navbar } from '../../organisms/Navbar/Navbar';

export const LoginPage = () => {
  const LoginPageBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #e1e1e1;
    img:last-child {
      height: 650px;
      width: 600px;
  }
  `;

  const SatekBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    img {
      width: 70px;
      height: 70px;
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 14px;
      color: #99afb5;
    }
  `;

  
  return (
    <>
      <Navbar />
      <LoginPageBox>
        <div  style={{ width: "40%" }}>
          <SatekBox>
            <Image src={Logo} alt="" />
            <H1>ساتک</H1>
            <p>سامانه الکترونیک تهیه کالا</p>
          </SatekBox>
          <Login />
        </div>
        <div style={{ width: "60%", textAlign: "center" }}>
          <Image src={ImageLogin} alt="" />
        </div>
      </LoginPageBox>
    </>
  );
};
