import React from "react";
import { Background, BannerText, Title } from "./styles";
import { BannerBg } from "../../../assets/images";
import { SectionWrapper } from "../../../_principles/styles";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Banner() {
  return (
    <SectionWrapper>
      <Background bg={BannerBg}></Background>
      <BannerText className="container">
        <Title className="pt-5">Chào mừng mọi người đến với  </Title>
        <Title style={{ color: "#910a0a", fontSize: 28 }}>
          Nguyễn Trang linh 
          <br />
          và
          <br />
          năm 2024 
          <br />
          {"Lương Thế Vinh,Quảng Bình"}
        </Title>
      </BannerText>
    </SectionWrapper>
  );
}
