import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Fragments>
      <Logo>
        <img src="https://holaworld.io/images/logo/new-logo.png" />
      </Logo>
      <NavBar>
        <a href="/register"><button>새 글 쓰기</button></a>
        <button>
          <img src="https://holaworld.io/images/info/notification.svg" />
        </button>
        <button className="navBar-icon">
          <img src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG" />
        </button>
      </NavBar>
    </Fragments>
  );
};

export default Header;

const Fragments = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.button`
  margin: 10px;
  width: 105px;
  img {
    width: 100%;
  }
`;

const NavBar = styled.div`
  display: flex;
  .navBar-icon {
    width: 32px;
    height: 32px;
    > img {
      width: 100%;
    }
  }
`;
