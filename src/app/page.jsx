"use client";

import React from "react";
import styled from "styled-components";
export default function HomePage() {
  return (
    <Container>
      <HeaderContainer>
        <Logo src="/logo.png" alt="logo" />

        <ButtonGroup>
          <HeaderButton>회원가입</HeaderButton>
          <HeaderButton>Sign Up</HeaderButton>
        </ButtonGroup>
      </HeaderContainer>
      <TitleContainer>
        <Title1> 
          손쉽게 구하는 학습 메이트, <br />
          <span style={{color: '#ffd200'}}>peopool</span>이면 되니까.
        </Title1>
        <Title2>
            교내대회, 한솥밥, 어울림 ··· <br />
            여기서 다 되니까.
        </Title2>
        <ButtonGroup>
          <HeaderButton>Learn More</HeaderButton>
        </ButtonGroup>
      </TitleContainer>
      <LandingImg src="/landingImg.png" alt="landing"/>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-image: url("/bg.svg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  padding: 5%;
  padding-top: 3%;
  color: white;
  gap: 7rem;
`;
const LandingImg = styled.img`
  position: absolute;
  top: -5%;
  right: -9%;
  height: 140vh;
  z-index: 0;
`

const HeaderContainer = styled.header`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  width: 90px;
  filter: brightness(0) invert(1);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeaderButton = styled.button`
  padding: 0.5rem 4rem; 
  background-color: #5f8cd6;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #5a86ce;
  }
`;

const TitleContainer = styled.div`
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
`;

const Title1 = styled.p`
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.5px;
`;

const Title2 = styled.p`
  color: #e8f2ff;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.5px;
`;
