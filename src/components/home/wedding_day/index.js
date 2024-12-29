import React from "react";
import {
  Background,
  BannerText,
  CountdownText,
  CountdownWrapper,
  Date,
  SubText,
  Text,
  Thanks,
  Title,
  Value,
  ValueWrapper,
} from "./styles";

import { nen } from "../../../assets/images";
import { SectionWrapper } from "../../../_principles/styles";
import Countdown from "react-countdown";

export function WeddingDay() {
  return (
    <SectionWrapper className="position-relative">
      <Background bg={nen}></Background>
      <BannerText className="container">
        <Title>Happy new year </Title>
        <Date>01-01-2025</Date>
        <Thanks>
          Thật hạnh phúc vì chúng ta đã ở cạnh nhau một năm qua..
        </Thanks>
        <CountdownWrapper>
          <SubText>Chỉ còn vài giờ nữa...</SubText>
          <Countdown
            date={"2025-01-01T00:00:00"}
            intervalDelay={0}
            precision={3}
            renderer={(props) => (
              <CountdownText>
                {props.days > 0 && (
                  <ValueWrapper>
                    <Value>{props.days}</Value>
                    <Text>NGÀY</Text>
                  </ValueWrapper>
                )}
                <ValueWrapper>
                  <Value>{props.hours}</Value>
                  <Text>GIỜ</Text>
                </ValueWrapper>
                <ValueWrapper>
                  <Value>{props.minutes}</Value>
                  <Text>PHÚT</Text>
                </ValueWrapper>
                <ValueWrapper>
                  <Value>{props.seconds}</Value>
                  <Text>GIÂY</Text>
                </ValueWrapper>
              </CountdownText>
            )}
          />
          <SubText>...là sang năm mới rồi!</SubText>
        </CountdownWrapper>
      </BannerText>
    </SectionWrapper>
  );
}
