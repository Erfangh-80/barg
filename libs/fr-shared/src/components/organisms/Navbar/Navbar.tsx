import styled from 'styled-components';
import { Li } from '../../atoms/li/Li';
import { Ul } from '../../atoms/ul/Ul';
import Image from 'next/image';
import Logo from '../../../utils/images/logo.png';

const Navbar = () => {
  const NavbarBox = styled.div`
    background-color: #fff;
    display: flex;
    box-shadow: 0px 1px 3px gray;
    transition: border 300ms ease;
    ul {
      display: flex;
      list-style: none;
      margin: 0px;
      margin-right: 1.5rem;
    }
    li {
      padding: 1rem;
      font-size: 14px;
    }
    li:hover {
      border-bottom: 2px solid #4579dc;
      cursor: pointer;
    }
  `;

  const LogoBox = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    img {
      width: 30px;
      height: 30px;
    }
    span {
      padding-right: 1rem;
    }
  `;

  return (
    <NavbarBox>
      <LogoBox>
        <Image src={Logo} alt="logo satek" />
        <span>ساتک</span>
      </LogoBox>
      <Ul>
        <Li>بلاگ</Li>
        <Li>ثبت فروشندگان</Li>
        <Li>درخواست همکاری</Li>
        <Li>سوالات متداول</Li>
        <Li>درباره ما</Li>
        <Li>ارتباط با ما</Li>
      </Ul>
    </NavbarBox>
  );
};

export { Navbar };
