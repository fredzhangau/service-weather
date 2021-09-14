import React from "react";
import styled from "styled-components";
import { IPage } from "../interfaces";
import { Row, Paper, TextItem } from "../components/basics";
import { device } from "../styles";
import error from "../assets/error.png";

const ImgContainer = styled.img`
  margin: 16px;
  height: 128px;
  width: 128px;
  @media ${device.mobileL} {
    height: 168px;
    width: 168px;
  }
  @media ${device.laptop} {
    height: 200px;
    width: 200px;
  }
`;

const ErrorPage: React.FC<IPage> = () => {
  return (
    <Paper alignItem="center">
      <ImgContainer src={error} />
      <Row>
        <TextItem
          fontSize={window.matchMedia(device.tablet).matches ? "24px" : "16px"}
        >
          Oops... <br />
          There are some issues with the service. <br />
          Please try later.
        </TextItem>
      </Row>
    </Paper>
  );
};

export default ErrorPage;
