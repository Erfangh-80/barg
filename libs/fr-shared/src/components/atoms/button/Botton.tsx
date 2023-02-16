import styled from 'styled-components';

type Button = {
  text?: string;
  color?: string;
  padding?: string;
  background?: string;
  backgroundHover?: string;
  onClick?: () => void;
  children?: any
};

const Button = (props: Button) => {

  const color = (props.color && `color: ${props.color}` )
  const background = (props.background && `background: ${props.background}` )
  const backgroundHover = (props.backgroundHover && `background: ${props.backgroundHover}`)
  const Padding = (props.padding && `padding: ${props.padding}`)
  
  const Button = styled.button`
    ${background};
    ${color};
    display: flex;
    border-radius: 25px;
    ${Padding};
    cursor: pointer;
    transition: ${background} 0.1s ease-in;
    border: 1px solid ${props.background !== "#fff" ? "none" : "#939393"};
    transition: background 0.1s ease-in-out;
    :hover {
      ${backgroundHover};
    }
  `;
  
  return (
      <Button onClick={props.onClick}>
        {props.children}
        {props.text}
      </Button>);
};

export { Button };
