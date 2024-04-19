import React, { useRef } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImg from "./components/BannerImg";
import RightArrow from "./components/RightArrow";
import LeftArrow from "./components/LeftArrow";

const Banner: React.FC = () => {
  const slickRef = useRef<any>();

  const gotoRight = () => {
    slickRef.current.slickNext();
  };

  const gotoLeft = () => {
    slickRef.current.slickPrev();
  };

  const BannerImgData = [
    {
      href: "https://temporal-weather-18e.notion.site/Hola-_______-613200b663ab47b2b59c8c5cf0011b2f",
      src: "https://hola-post-image.s3.ap-northeast-2.amazonaws.com/ad/hola-event_2024-01-27_02-28-34.png",
    },
    {
      href: "https://bit.ly/4aPdfLV",
      src: "https://hola-post-image.s3.ap-northeast-2.amazonaws.com/ad/hola-event_2024-04-14_23-26-24.png",
    },
    {
      href: "https://www.instagram.com/holaworld_official",
      src: "https://hola-post-image.s3.ap-northeast-2.amazonaws.com/ad/hola-event_2024-01-27_02-28-13.png",
    },
  ];

  const setSlider = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    waitForAnimate: false,
    autoplay: true,
  };

  return (
    <BannerBlockWrap>
      <BannerBlock>
        <Slider ref={slickRef} {...setSlider}>
          {BannerImgData.map((item, index) => {
            return (
              <Fragment>
                <BannerImg href={item.href} src={item.src} />
                <BannerBlockArrow>
                  <LeftArrow index={index + 1} onClick={() => gotoLeft()} />
                  <span>|</span>
                  <RightArrow index={index + 1} onClick={() => gotoRight()} />
                </BannerBlockArrow>
              </Fragment>
            );
          })}
        </Slider>
      </BannerBlock>
    </BannerBlockWrap>
  );
};

export default Banner;

const BannerBlockWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 15px;
`;

const BannerBlock = styled.div`
  outline: none;
  max-width: 1300px;
`;

const Fragment = styled.div`
  position: relative;
`;

const BannerBlockArrow = styled.div`
  padding: 7px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 36px;
  background: hsla(0, 0%, 100%, 0.8);
  color: #555;
  position: absolute;
  right: 30px;
  bottom: 25px;
  font-size: 14px;
  font-weight: 500;
`;
