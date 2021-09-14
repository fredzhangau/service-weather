import { useHistory } from "react-router";
import styled from "styled-components";
import { device, secondaryBackground, white } from "../styles";
import { ICurrent } from "../interfaces/weather";
import { Icon, Row, TextItem } from "./basics";

const Container = styled.div`
  display: flex;
  padding: 16px;
  width: 90%;
  @media ${device.mobileL} {
    width: 40%;
  }
  @media ${device.laptop} {
    width: 20%;
  }
`;

const CardItem = styled.div`
  color: ${white};
  background: ${secondaryBackground};
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
`;

export function CityCard(props: { weatherData: ICurrent }) {
  const { weatherData } = props;
  const history = useHistory();

  const handleClick = (city: string, state: string, country: string) => {
    history.push(`/city/${country}/${state}/${city}`);
  };

  return (
    <Container
      onClick={() =>
        handleClick(
          weatherData.city.name,
          weatherData.city.state,
          weatherData.city.country
        )
      }
    >
      <CardItem>
        <Row>
          <TextItem fontWeight="bold" margin="12px 0 0 0" color={white}>
            {weatherData.city.name}
          </TextItem>
        </Row>
        <Row>
          <TextItem color={white} fontSize="20px">
            {weatherData.weather.description}
          </TextItem>
        </Row>
        <Row alignItems="center" justifyContent="space-around">
          <Icon height="70px" width="70px" src={weatherData.weather.icon} />
          <TextItem color={white} minWidth="92px">
            {weatherData.temp}
          </TextItem>
        </Row>
        <Row justifyContent="flex-end" margin="0">
          <TextItem color={white} fontSize="12px">
            UPDATED {weatherData.time} {weatherData.timeZone}
          </TextItem>
        </Row>
      </CardItem>
    </Container>
  );
}
