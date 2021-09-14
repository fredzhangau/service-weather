import React from "react";
import styled from "styled-components";
import { Appbar, HeroBanner } from "../components/layout";
import { device } from "../styles";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  margin: 0;
  max-width: 1028px;
  @media ${device.tablet} {
    margin: 0 80px;
  }
`;

const layout: React.FC = ({ children }) => {
  return (
    <Root>
      <Appbar />
      <HeroBanner />
      <Main>{children}</Main>
    </Root>
  );
};

export default layout;
