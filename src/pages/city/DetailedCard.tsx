import React from "react";
import { detailedCardRef, IWeatherRef } from "./detailedCardRef";
import { TwoRowBox } from "../../components";
import { Paper, Row, TextItem } from "../../components/basics";
import { IDataGroup } from "../../interfaces";
import { secondaryBackground } from "../../styles/colors";
import { getValue } from "../../utils/helper";
import { white } from "../../styles";

export default function DetailedCard({
  currentData,
  forecastData,
}: IDataGroup) {
  return (
    <Paper background={secondaryBackground} flex="30%" flexDirection="column">
      <Row alignItems="flex-end">
        <TextItem
          color={white}
          fontSize="36px"
          fontWeight="bold"
          padding="0 28px 0 0"
        >
          {currentData?.city.name}
        </TextItem>
        <TextItem
          color={white}
          fontSize="36px"
          fontWeight="bold"
          padding="0 28px 0 0"
        >
          Now
        </TextItem>
        <TextItem
          color={white}
          fontSize="16px"
          textTransform="uppercase"
          opacity="0.5"
        >
          UPDATED {currentData?.time} {currentData?.timeZone}
        </TextItem>
      </Row>

      <Row alignItems="flex-end">
        <TextItem
          color={white}
          fontSize="48px"
          fontWeight="bold"
          padding="10px 50px 0 0"
        >
          {currentData?.temp}
        </TextItem>
        <TwoRowBox title="Feels like" content={currentData?.feelsLike ?? ""} />
      </Row>

      <Row>
        {currentData &&
          forecastData &&
          detailedCardRef.map((item: IWeatherRef, index: number) => {
            const rowContent = getValue(
              item.dataSet === "currentData" ? currentData : forecastData,
              item.contentKey
            );
            return (
              <TwoRowBox key={index} title={item.title} content={rowContent} />
            );
          })}
      </Row>
    </Paper>
  );
}
