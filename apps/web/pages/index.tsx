import { useState } from 'react';
import styled from 'styled-components';
import {LoginPage} from "@barg/fr-shared"

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
      <LoginPage />
    </StyledPage>
  );
}

export default Index;
