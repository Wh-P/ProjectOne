import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TrendingData } from "../../data/TrendingData";

const Trending: React.FC = () => {
  const slickRef = useRef<any>();

  const gotoLeft = () => {
    slickRef.current.slickPrev();
  };

  const gotoRight = () => {
    slickRef.current.slickNext();
  };

  const setSlider = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    draggable: true,
    waitForAnimate: false,
    autoplay: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <TrendingWrap>
      <TrendingHeader>
        <TrendingTitle>🔥 이번주 올라 인기글</TrendingTitle>
        <TrendingArrow>
          <img
            src="https://holaworld.io/images/info/left-arrow-button.png"
            onClick={() => gotoLeft()}
          />
          <img
            src="https://holaworld.io/images/info/right-arrow-button.png"
            onClick={() => gotoRight()}
          />
        </TrendingArrow>
      </TrendingHeader>
      <TrendingSliderWrap>
        <Slider ref={slickRef} {...setSlider}>
          {TrendingData().map((item) => {
            return (
              <TrendingSlider>
                <TrendingSliderBlock to="/detail">
                  <TrendingSliderHeader>
                    <Badge>{item.badge}</Badge>
                    <DeadLine>{item.deadline}</DeadLine>
                  </TrendingSliderHeader>
                  <DueDate>{item.duedate}</DueDate>
                  <Title>{item.title}</Title>
                  <Views>{item.views}</Views>
                </TrendingSliderBlock>
              </TrendingSlider>
            );
          })}
        </Slider>
      </TrendingSliderWrap>
    </TrendingWrap>
  );
};

const TrendingWrap = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 7px 15px;
  margin: 100px auto 60px;
  @media screen and (max-width: 1300px) {
    max-width: 980px;
  }
  @media screen and (max-width: 980px) {
    max-width: 630px;
  }
`;
const TrendingHeader = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const TrendingTitle = styled.h2`
  color: rgb(0, 0, 0);
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.78px;
  margin: 0px 0px 24px;
`;
const TrendingArrow = styled.div`
  display: flex;
  gap: 6px;
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;

const TrendingSliderWrap = styled.div`
  outline: none;
  max-width: 1300px;
`;

const TrendingSlider = styled.div`
  display: flex !important;
`;

const TrendingSliderBlock = styled(Link)`
  align-self: stretch;
  padding: 20px 25px;
  border-radius: 20px;
  border: 2px solid rgb(209, 209, 209);
  background: rgb(255, 255, 255);
  margin: 0px 12px;
  height: unset;
  text-decoration: none;
`;

const TrendingSliderHeader = styled.div`
  display: flex;
  height: 26px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;
const Badge = styled.div`
  border-radius: 20px;
  padding: 4px 12px;
  background: #efefef;
  color: #656565;
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.04em;
`;
const DeadLine = styled.div`
  padding: 2px 8px;
  border-radius: 20px;
  border: 1px solid rgb(234, 114, 111);
  color: rgb(234, 114, 111);
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.56px;
`;
const DueDate = styled.div`
  color: rgb(153, 153, 153);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
`;
const Title = styled.div`
  margin: 10px 0px 0px;
  color: rgb(0, 0, 0);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -1px;
  min-height: 50px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
  overflow: hidden;
`;
const Views = styled.div`
  margin-top: 15px;
  color: rgb(78, 78, 78);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.56px;
  text-align: end;
`;
export default Trending;
