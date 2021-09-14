import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Icon, Row } from "../basics";
import { SearchBar } from "./";
import logo from "../../assets/logo.svg";

const LogoContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const Appbar: React.FC = () => {
  const history = useHistory();
  return (
    <Row
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      maxWidth="1028px"
    >
      <Row alignItems="center" padding="10px">
        <LogoContainer>
          <Icon
            onClick={() => history.push("/")}
            src={logo}
            height="100px"
            width="280px"
          />
        </LogoContainer>
      </Row>
      <SearchBar />
    </Row>
  );
};
