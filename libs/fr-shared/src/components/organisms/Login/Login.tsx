import styled from 'styled-components';
import { Input } from '../../atoms/input/input';
import { H1 } from '../../atoms/H1/H1';
import { Button } from '../../atoms/button/Botton';

export const Login = () => {
  const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem 2rem 3rem;
    box-shadow: 0px 1px 1px gray;
    width: 50%;
    margin: 0px auto;
    h1 {
      margin-top: 0px;
      font-weight: 700;
      font-size: 1.2rem;
    }
    input {
      margin: 1rem 0px;
      border: 1px solid #D9D9D9;
    }
    button {
      background-color: #4579DC;
      padding: 10px;
      color: #fff;
    }
  `;

  return (
    <LoginBox>
      <H1>ورود</H1>
      <Input padding='10px' placeholder='شماره همراه'/>
      <Button>دریافت کد ورود</Button>
    </LoginBox>
  );
};
