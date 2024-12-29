import { AvatarHusband, AvatarWife } from "../../../assets/images";
import { SectionWrapper } from "../../../_principles/styles";
import {
  Avatar,
  Feeling,
  FeelingText,
  Heart,
  Husband,
  Image,
  Name,
  SubTitle,
  Text,
  Title,
  Wife,
  Wrapper,
} from "./styles";
import { AiFillHeart } from "react-icons/ai";

export function Whisper() {
  return (
    <SectionWrapper>
      <Wrapper className="container">
        <Title>...</Title>
        <SubTitle>Nhìn lại một chút </SubTitle>
        <Feeling>
          <Wife>
          <Avatar>
              <Image src={AvatarWife} alt="rong" />
            </Avatar>
            <FeelingText>
              <Name>Năm 2024 </Name>
              <Text>
                1 năm, 365 ngày để sống và chúng ta đã làm mọi thứ thật trọn vẹn
                đừng nuối tiếc điều gì
              </Text>
            </FeelingText>
          </Wife>
          <Heart>
            <AiFillHeart />
          </Heart>
          <Husband>
            <Avatar>
              <Image src={AvatarHusband} alt="embe" />
            </Avatar>
            <FeelingText>
              <Name>Nguyễn Trang Linh </Name>
              <Text>
                Năm 17 tuổi- không có thành tựu đáng mong đợi, nhưng mình biết rằng
                chặng hành trình còn dài và sẽ không bao giờ kết thúc. Không nuối tiếc,
                chỉ mong bản thân nỗ lực nhiều hơn, để chạm tới ước mơ 
              </Text>
            </FeelingText>
          </Husband>
        </Feeling>
      </Wrapper>
    </SectionWrapper>
  );
}
