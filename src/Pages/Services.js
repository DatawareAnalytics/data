import React, { useEffect } from 'react'
import { CardColumn,Body, Card, Image,Rows, Wrapper, Hero, HeroWrapper, HeroContent } from './Styled'
import { ButtonLarge, PageText, PageTitle, Text, Title } from '../GlobalStyled'
import { DataAnalysis, MLData, SoftData } from '../data/Data'
import { Rotate } from 'react-reveal'
import { MdArrowForward } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate  = useNavigate()
  useEffect(()=>{
    return(()=>document.title = 'Our Services')
  })
  return (
    <>
    <Hero>
        <HeroWrapper>
            <HeroContent>
                <Title>Dataware Analytics</Title>
                <PageTitle>Software Development || Data Analytics || Artificial Intelligence </PageTitle>
            </HeroContent>
        </HeroWrapper>
        </Hero>
    <Wrapper>        
        <Body>
            <Rotate top left>
              <Card>
                  <Rows>
                      <CardColumn>
                        <Text>Our goal is to solve your problems. It just makes good sense that our clients’ success drives our success. We focus on decision making as the center of our consulting services. If you make better decisions, you are more successful. If you are more successful, you will want us to do more work for you. Simple philosophy</Text>
                        <Text>Our consultancy services span a variety of digital transformation solutions for clients around the world.</Text>
                      </CardColumn>
                      <Image alt='Software Picture' src={require('../asset/images/ladder.webp')} />
                  </Rows>
              </Card>
            </Rotate>
            <Rotate top right>
              <Card>
                  <Rows reverse={true}>
                      <CardColumn>
                      <Text>We always want to provide our partners with consistent services on our strategy and our processes. You should know exactly what is going on in your projects at all times. True partnership comes from shared knowledge and understanding.</Text>
                      </CardColumn>
                      <Image alt='Software Picture' src={require('../asset/images/time.jpg')} />
                  </Rows>
              </Card>
            </Rotate>
            <Title>What We Actually Do</Title>
            <Rotate bottom left>
            <Card>
                <Rows reverse={SoftData.reverse}>
                    <CardColumn>
                      <PageTitle>{SoftData.title}</PageTitle>
                      <PageText>{SoftData.content}</PageText>
                      <ButtonLarge onClick={()=>window.location.pathname=SoftData.link}>Follow Me &nbsp;<MdArrowForward/> </ButtonLarge>
                    </CardColumn>
                    <Image alt='Software Picture' src={SoftData.image} />
                </Rows>
            </Card>
            </Rotate>
            <Rotate bottom right>
            <Card>
                <Rows reverse={DataAnalysis.reverse}>
                    <CardColumn>
                      <PageTitle>{DataAnalysis.title}</PageTitle>
                      <PageText>{DataAnalysis.content}</PageText>
                      <ButtonLarge onClick={()=>window.location.pathname=navigate(DataAnalysis.link)}>Follow Me &nbsp;<MdArrowForward/></ButtonLarge>
                    </CardColumn>
                    <Image alt='Software Picture' src={DataAnalysis.image} />
                </Rows>
            </Card>
            </Rotate>
            <Rotate>
            <Card top right>
                <Rows reverse={MLData.reverse}>
                    <CardColumn>
                      <PageTitle>{MLData.title}</PageTitle>
                      <PageText>{MLData.content}</PageText>
                      <ButtonLarge onClick={()=>window.location.pathname=navigate(DataAnalysis.link)}>Follow Me &nbsp;<MdArrowForward/></ButtonLarge>
                    </CardColumn>
                    <Image alt='Software Picture' src={MLData.image} />
                </Rows>
            </Card>
            </Rotate>
            {/* <Card>
                <Rows reverse={CSData.reverse}>
                    <CardColumn>
                      <PageTitle>{CSData.title}</PageTitle>
                      <PageText>{CSData.content}</PageText>
                      <ButtonLarge onClick={()=>window.location.pathname=SoftData.link}>See Details</ButtonLarge>
                    </CardColumn>
                    <Image alt='Software Picture' src={CSData.image} />
                </Rows>
            </Card> */}
        </Body>
    </Wrapper>
    </>
  )
}
