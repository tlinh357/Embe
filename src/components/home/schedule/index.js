import { SectionWrapper } from "../../../_principles/styles";
import {
  EventEmpty,
  EventLeft,
  EventRight,
  EventText,
  EventTime,
  EventWrapper,
  IconWrapper,
  Invitation,
  ScheduleWrapper,
  SubTitle,
  Title,
  Wrapper,
} from "./styles";
import { FaGlassCheers } from "react-icons/fa";
import { GiLovers, GiForkKnifeSpoon, GiMusicalNotes } from "react-icons/gi";
// import { address } from "../../../assets/images";

export function Schedule() {
  return (
    <SectionWrapper>
      <Wrapper className="container">
        <Title>Cuối năm ta nên làm gì nhỉ ... </Title>
        <Invitation>... </Invitation>
        <SubTitle>
          {"Chỉ còn chưa đầy một tháng nữa thôi là năm mới lại đến "}
          <br />
          <br />
          {
            "Cùng nhau tận hưởng những ngày cuối cùng của 2024 thật trọn vẹn nhé  "
          }
          <br />
          <br />
          {/* <img src={address} alt="Logo" width="200" height="200"/> */}
        </SubTitle>
        <ScheduleWrapper>
          <EventWrapper>
            <EventLeft>
              <EventTime>Ngày 26,27,28</EventTime>
              <EventText>Dọn dẹp nhà cửacửa, mua kẹo mứt, trang trí </EventText>
            </EventLeft>
            <IconWrapper>
              <FaGlassCheers />
            </IconWrapper>
            <EventEmpty></EventEmpty>
          </EventWrapper>
          <EventWrapper>
            <EventEmpty></EventEmpty>
            <IconWrapper>
              <GiLovers />
            </IconWrapper>
            <EventRight>
              <EventTime>Ngày 29 </EventTime>
              <EventText>Hoàn thành các dự định dở dang </EventText>
            </EventRight>
          </EventWrapper>
          <EventWrapper>
            <EventLeft>
              <EventTime>Ngày 30 </EventTime>
              <EventText>Xem táo quân, xem pháo hoa, 
                ở bên gia đìnhđình </EventText>
            </EventLeft>
            <IconWrapper>
              <GiForkKnifeSpoon />
            </IconWrapper>
            <EventEmpty></EventEmpty>
          </EventWrapper>
          <EventWrapper>
            <EventEmpty></EventEmpty>
            <IconWrapper>
              <GiMusicalNotes />
            </IconWrapper>
            <EventRight>
              <EventTime>00:00</EventTime>
              <EventText>Chúc mừng năm mới </EventText>
            </EventRight>
          </EventWrapper>
        </ScheduleWrapper>
      </Wrapper>
    </SectionWrapper>
  );
}
