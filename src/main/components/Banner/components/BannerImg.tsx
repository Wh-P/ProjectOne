import React from "react";
import styled from "styled-components";

type BannerImgProps = {
  href: string;
  src: string;
};

const BannerImg: React.FC<BannerImgProps> = (props) => {
  return (
    <>
      <BannerImgWrap>
        <a href={props.href} target="_blank">
          <img src={props.src} />
        </a>
      </BannerImgWrap>
    </>
  );
};

export default BannerImg;

const BannerImgWrap = styled.div`
  img {
    width: 100%;
  }
`;
