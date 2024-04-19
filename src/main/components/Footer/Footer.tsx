import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer: React.FC = () => {
  const RightCoverData = [
    {
      href: "https://temporal-weather-18e.notion.site/95f676cba1a245bf843ffa6a6f7933dd",
      title: "이용약관",
    },
    {
      href: "https://temporal-weather-18e.notion.site/f8bced09dea34b6caa11251eb8b8f1ef",
      title: "개인정보처리방침",
    },
    {
      href: "https://temporal-weather-18e.notion.site/Hola-_______-613200b663ab47b2b59c8c5cf0011b2f",
      title: "서비스소개",
    },
    {
      href: "https://tally.so/r/w4rWyX",
      title: "광고상품 소개",
    },
  ];

  return (
    <FooterWrap>
      <FooterLeftCover>
        <img src="https://holaworld.io/images/logo/footer.png" />
        <div>Contact team.hola.official@gmail.com</div>
        <div>Copyright Hola. All rights reserved</div>
      </FooterLeftCover>
      <FooterRightCover>
        {RightCoverData.map((item) => {
          return (
            <FooterRightLink to={item.href} target="_blank">
              {item.title}
            </FooterRightLink>
          );
        })}
      </FooterRightCover>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  margin-top: 50px;
  height: 180px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterLeftCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  img {
    display: block;
    width: 60px;
    height: 15px;
    margin-bottom: 32px;
  }
  div {
    display: flex;
    grid-gap: 10px;
    gap: 10px;
    font-weight: 400;
    font-size: 13px;
    letter-spacing: -0.2px;
    color: #777;
  }
`;

const FooterRightCover = styled.div`
  display: flex;
  grid-gap: 50px;
  gap: 50px;
  line-height: 17px;
  align-items: center;
  margin-top: 20px;
`;

const FooterRightLink = styled(Link)`
  color: #2f2f2f;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
`;

export default Footer;
