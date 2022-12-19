import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/common/GlobaStyle'
import Introduction from 'components/Main/Introduction'
import CategoryList from 'components/Main/CategoryLIst'
import PostList from 'components/Main/PostList'
import Footer from 'components/common/Footer'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const Conatainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Conatainer>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Conatainer>
  )
}

export default IndexPage
