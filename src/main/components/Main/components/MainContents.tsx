import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { MainContentsData } from "../../../data/MainContentsData";

const MainContents: React.FC = () => {
  return (
    <MainContentsWrap>
      {MainContentsData().map((item) => {
        return (
          <MainContentsLink to="/detail">
            <MainContentsLi>
              <BadgeWrap>
                <Badge>{item.badge}</Badge>
              </BadgeWrap>
              <DueDateWrap>
                <DueDate>마감일 | {item.dueDate}</DueDate>
              </DueDateWrap>
              <Title>{item.title}</Title>
              <PositionWrap>
                {item.position.map((position) => {
                  return <Position>{position}</Position>;
                })}
              </PositionWrap>
              <LanguageWrap>
                {item.language.map((language) => {
                  return (
                    <Language>
                      <img src={language} />
                    </Language>
                  );
                })}
              </LanguageWrap>
              <Border />
              <Info>
                <UserWrap>
                  <UserImg>
                    <img src={item.userImg} />
                  </UserImg>
                  <div>{item.userName}</div>
                </UserWrap>
                <ViewsAndComments>
                  <Views>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      color="#999999"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                    </svg>
                    <p>{item.views}</p>
                  </Views>
                  <Comments>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      color="#999999"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path>
                    </svg>
                    <p>{item.comments}</p>
                  </Comments>
                </ViewsAndComments>
              </Info>
            </MainContentsLi>
          </MainContentsLink>
        );
      })}
    </MainContentsWrap>
  );
};

const MainContentsWrap = styled.ul`
  width: 1325px;
  display: flex;
  grid-gap: 27px;
  gap: 27px;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 20px;
  list-style: none;
`;

const MainContentsLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 25px 0;
  width: 300px;
  height: 340px;
  background: #fff;
  border: 2px solid #d1d1d1;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: 0.2s ease-in;
  color: inherit;
  text-decoration: none;
`;

const MainContentsLi = styled.li`
  padding: 0;
  list-style: none;
`;

const BadgeWrap = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 3px;
  gap: 3px;
`;

const Badge = styled.div`
  border-radius: 20px;
  padding: 4px 12px;
  background: #efefef;
  color: #656565;
`;

const DueDateWrap = styled.div`
  display: flex;
  font-size: 14px;
  grid-gap: 8px;
  gap: 8px;
  color: #999;
  font-weight: 500;
  margin-top: 20px;
`;

const DueDate = styled.p`
  margin: 0;
`;

const Title = styled.h1`
  font-size: 17px;
  min-height: 50px;
  line-height: 28px;
  font-weight: 500;
  letter-spacing: -0.05em;
  margin: 7px 0 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
  overflow: hidden;
`;

const PositionWrap = styled.ul`
  height: 22px;
  display: flex;
  grid-gap: 3px;
  gap: 3px;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Position = styled.li`
  padding: 3px 10px;
  grid-gap: 5px;
  gap: 5px;
  height: 22px;
  background: #f2f4f8;
  border-radius: 15px;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #3e86f5;
`;

const LanguageWrap = styled.ul`
  margin-top: 20px;
  margin-bottom: 24px;
  padding: 0;
  display: flex;
  grid-gap: 8px;
  gap: 8px;
  list-style: none;
`;
const Language = styled.li`
  img {
    width: 32px;
    height: 32px;
  }
`;

const Border = styled.div`
  border-top: 2px solid #f2f2f2;
`;

const Info = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: space-between;
  letter-spacing: -0.04em;
  margin-top: 8px;
`;

const UserWrap = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  gap: 10px;
`;

const UserImg = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  img {
    display: block;
    border-radius: 50%;
    object-fit: cover;
    width: 30px;
    aspect-ratio: auto 30 / 30;
    height: 30px;
  }
`;

const ViewsAndComments = styled.div`
  display: flex;
  grid-gap: 10px;
  gap: 10px;
`;

const Views = styled.div`
  display: flex;
  align-items: center;
  color: #999;
  grid-gap: 5px;
  gap: 5px;
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  color: #999;
  grid-gap: 5px;
  gap: 5px;
`;

export default MainContents;
