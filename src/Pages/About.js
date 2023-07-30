import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container, PageText, Title } from '../GlobalStyled'
import { Card } from './Styled'

export default function About() {
  useEffect(()=>{
    return(()=>document.title = 'About us')
  })
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>About Dataware Analytics</Title>
          <Card>
            <Column>
              <PageText>Dataware Analytics As a trusted partner of the world’s leading brands and most discerning clients, we applies our vast technology expertise and domain knowledge to develop landmark applications.</PageText>
              <PageText>We work with smart global companies that recognize the need for a partner who can offer the best approach and build custom solutions that generate high returns with little risk</PageText>
              <PageText>We work with complex business models and companies that are looking to bring new and re-engineered products to the market</PageText>
              <PageText>
                   We Identify new opportunities, mitigate risk and optimise decision-making no matter the market landscape. From detailed historical data to comprehensive forecasts
              </PageText>
              <PageText>
              We help companies make strategic, sustainable decisions by bringing transparency to markets across the world. We create a comprehensive view of commodities markets, providing companies with the data and intelligence to successfully navigate across global value chains every day.
              </PageText>
              <PageText>We help organizations that demand quality, proven domain expertise and integrity from the vendors they work with.</PageText>
            </Column>
          </Card>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Content = styled.div`
width: 80%;
padding: 2em;

@media screen and (max-width:900px) {
 width:90%;
 padding :10px ;
}
@media screen and (max-width:600px) {
 width:100%;
 padding :10px ;
}
`
const  Column = styled.div`
width: 100%;
padding: 10px;
flex-direction: column;
display: flex;
align-items: center;
`