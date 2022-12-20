import { FunctionComponent } from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import ProfileImage from './ProfileImage'

const Background = styled.div`
import { FunctionComponent } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ProfileImage from './ProfileImage';
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`
type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: FunctionComponent<IntroductionProps> = ({
  profileImage,
}) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />
        <div>
          <SubTitle>Hello, Nice to Meet you.</SubTitle>
          <Title>I'm Frontend Developer SHee.</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

export default Introduction
