import { SectionWrapper } from "../../_principles/styles";
import { Bank, Logo, Momo } from "../../assets/images";
import { QrWrapper, Text, ThanksText, Wrapper } from "./styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export function BankCode() {
  return (
    <SectionWrapper>
      <Wrapper>
        <Text> Gửi lời chúc đến mình </Text>
        <ThanksText>Trang Linh và các tình iu của cô ấy</ThanksText>
        <ThanksText>chân thành cảm ơn tình cảm của mọi người !!!</ThanksText>
        <br/>
        <br/>
        <br/>
        <QrWrapper>
          <LazyLoadImage alt={"imgzalo"} effect="blur" src={Bank} />
          <LazyLoadImage alt={"imgzalo"} effect="blur" src={Momo} />
          <LazyLoadImage alt={"imgbaby"} effect="blur" src={Logo} />
          <LazyLoadImage alt={"imgbaby"} effect="blur" src={Logo} />
        </QrWrapper>
      </Wrapper>
    </SectionWrapper>
  );
}
