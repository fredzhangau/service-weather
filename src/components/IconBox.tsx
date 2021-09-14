import styled from "styled-components";
import { Icon, TextItem, TwoRowContainer } from "../components/basics";
import { device, darkText, lightText } from "../styles";

interface IConBoxProps {
  icon: string;
  title: string;
  content: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 12px;
  width: 50%;
  @media ${device.mobileL} {
    flex-direction: row;
  }
`;

export function IconBox(props: IConBoxProps) {
  const { icon, title, content } = props;
  return (
    <Container>
      <Icon src={icon} />
      <TwoRowContainer
        margin={
          window.matchMedia(device.mobileL).matches ? "0 0 0 32px" : "8px 0 0 0"
        }
        textAlign={
          window.matchMedia(device.mobileL).matches ? "left" : "center"
        }
      >
        <TextItem color={lightText} fontSize="22px" textTransform="uppercase">
          {title}
        </TextItem>
        <TextItem
          color={darkText}
          fontSize="16px"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {content}
        </TextItem>
      </TwoRowContainer>
    </Container>
  );
}
