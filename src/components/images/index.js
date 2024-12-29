import { MainWrapper } from "../../_principles/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";
import ImageViewer from "react-simple-image-viewer";
import {
  Description,
  Heading,
  ImageItem,
  ImageWrapper,
  Wrapper,
} from "./styles";
import { Images } from "../../assets/images/anhthem";

function ImagesComponent() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <MainWrapper>
      <Wrapper className="container">
        <Heading>Những cột mốc đáng nhớ</Heading>
        <Description>
          Kỷ niệm không bao giờ có lần hai. Hãy chiêm ngưỡng thật trọn vẹn để biết rằng năm qua mình đã là ai...
        </Description>
        <ImageWrapper>
          {Images.map((img, i) => (
            <ImageItem key={i} onClick={() => openImageViewer(i)}>
              <LazyLoadImage alt={img.alt} effect="blur" src={img.src} />
            </ImageItem>
          ))}
          {isViewerOpen && (
            <ImageViewer
              src={Images.map((img) => img.src)}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </ImageWrapper>
      </Wrapper>
    </MainWrapper>
  );
}

export default ImagesComponent;
