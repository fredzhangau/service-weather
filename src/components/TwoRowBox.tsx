import React from "react";
import { TextItem, TwoRowContainer } from "./basics";
import { white } from "../styles";

interface ITwoRowBoxProps {
  title: string;
  content: string;
}

export function TwoRowBox(props: ITwoRowBoxProps) {
  const { title, content } = props;
  return (
    <TwoRowContainer margin="12px 0 0 0" width="50%">
      <TextItem
        color={white}
        fontSize="22px"
        opacity="0.5"
        textTransform="uppercase"
      >
        {title}
      </TextItem>
      <TextItem color={white} fontSize="16px" fontWeight="bold">
        {content}
      </TextItem>
    </TwoRowContainer>
  );
}
