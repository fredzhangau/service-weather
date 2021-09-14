import React from "react";
import { iconInfoRef, IIconRef } from "./iconInfoRef";
import cloud from "../../assets/cloud.png";
import { HourlyBox, IconBox } from "../../components";
import {
  Icon,
  Paper,
  Row,
  TextItem,
  TwoColumnContainer,
  TwoRowContainer,
} from "../../components/basics";
import { device } from "../../styles";
import { IForecastData, IHourly } from "../../interfaces";
import { getValue } from "../../utils/helper";
import { lightText, lowTemp, highTemp } from "../../styles";

export default function Forecast({ forecastData }: IForecastData) {
  return (
    <Paper flex="60%" flexDirection="row" flexWrap="wrap" minHeight="440px">
      <Row
        justifyContent={
          window.matchMedia(device.mobileL).matches ? "space-between" : "center"
        }
        alignItems="center"
        width="100%"
        margin="0 0 16px 0"
      >
        <TwoColumnContainer>
          <Icon
            height="70px"
            width="70px"
            src={forecastData?.today.weather.icon ?? cloud}
          />
          <TwoRowContainer
            margin="0 24px"
            textAlign={
              window.matchMedia(device.mobileL).matches ? "left" : "center"
            }
          >
            <TextItem fontWeight="bold">TODAY</TextItem>
            <TextItem
              color={lightText}
              fontSize="18px"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {forecastData?.today.weather.description ?? ""}
            </TextItem>
          </TwoRowContainer>
        </TwoColumnContainer>

        <TwoColumnContainer>
          <TextItem
            background={lowTemp}
            fontSize="24px"
            fontWeight="bold"
            margin="0 12px 0 0"
            padding="8px"
          >
            {forecastData?.today.tempMin ?? "-"}
          </TextItem>

          <TextItem
            background={highTemp}
            fontSize="24px"
            fontWeight="bold"
            margin="0 0 0 12px"
            padding="8px"
          >
            {forecastData?.today.tempMax ?? "-"}
          </TextItem>
        </TwoColumnContainer>
      </Row>
      <Row
        justifyContent={
          window.matchMedia(device.mobileL).matches ? "flex-start" : "center"
        }
        width="100%"
      >
        {forecastData &&
          iconInfoRef.map((item: IIconRef, index: number) => {
            const rowContent = getValue(forecastData.today, item.contentKey);
            return (
              <IconBox
                key={index}
                icon={item.icon}
                title={item.title}
                content={rowContent}
              />
            );
          })}
      </Row>
      <Row
        justifyContent={
          window.matchMedia(device.mobileL).matches ? "space-between" : "center"
        }
        width="100%"
      >
        {forecastData?.hourly.map((weatherData: IHourly, index: number) => {
          return <HourlyBox key={index} weatherData={weatherData} />;
        })}
      </Row>
    </Paper>
  );
}
