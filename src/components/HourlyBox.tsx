import styled from "styled-components";
import { TextItem } from "../components/basics";
import { IHourly } from "../interfaces";
import { darkText } from "../styles";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

export function HourlyBox(props: { weatherData: IHourly }) {
  const { weatherData } = props;

  return (
    <Container>
      <TextItem color={darkText} fontSize="16px">
        {weatherData.time}
      </TextItem>
      <Img
        src={weatherData.weather.icon}
        alt={weatherData.weather.description}
      />
      <TextItem color={darkText} fontSize="16px">
        {weatherData.temp}
      </TextItem>
    </Container>
  );
}
