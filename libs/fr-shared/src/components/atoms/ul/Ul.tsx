import styled from 'styled-components';

type UlProps = {
  children: JSX.Element[];
};

export const Ul = ({ children }: UlProps) => {
  const UL = styled.ul``;

  return <UL>{children}</UL>;
};

