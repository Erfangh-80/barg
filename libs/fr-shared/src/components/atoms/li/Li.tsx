import styled from 'styled-components';

type LiProps = {
  children : string | JSX.Element
}

export const Li = ({children}: LiProps) => {
  const Li = styled.li``;

  return <Li>{children}</Li>;
};
