import React from "react";
import styled from "styled-components";
import { Row, TextItem, TwoRowContainer } from "../basics";
import { device, primaryBackground, white } from "../../styles";

const Container = styled.div`
  margin: 20px;
  @media ${device.tablet} {
    margin: 40px 60px;
  }
  @media ${device.laptop} {
    margin: 60px 100px;
  }
`;

export const HeroBanner: React.FC = () => {
  return (
    <Row background={primaryBackground} color={white} width="100%">
      <Container>
        <TwoRowContainer>
          <TextItem
            fontSize={
              window.matchMedia(device.tablet).matches ? "48px" : "36px"
            }
            color={white}
          >
            Service Weather
          </TextItem>
          <TextItem
            fontSize={
              window.matchMedia(device.tablet).matches ? "28px" : "18px"
            }
            color={white}
          >
            Making it easy to get the latest weather within Australia
          </TextItem>
        </TwoRowContainer>
      </Container>
    </Row>
  );
};
