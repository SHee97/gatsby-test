import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const PROFILE_IMAGE_LINK = `https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png`

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent = () => {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}
export default ProfileImage
