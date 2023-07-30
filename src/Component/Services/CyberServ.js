import React from 'react'
import { CardColumn,Body, Image,Rows, Wrapper, Hero, HeroWrapper, HeroContent, Email } from '../../Pages/Styled'
import { PageText, PageTitle, Text, Title } from '../../GlobalStyled'
import { DataAnalysis, MLData, SoftData } from '../../data/Data'
import { Rotate } from 'react-reveal'
import { SWrapper,Card, CardContent, CardImage, CardTitle, CardText, SGrid } from '../ServicesStyled'

export default function CyberServices() {
  return (
    <>
    <Hero>
        <HeroWrapper>
            <HeroContent>
                <Title>Cyber Security</Title>
                <Text>We will explore your data and make create meaningful report</Text>
            </HeroContent>
        </HeroWrapper>
        </Hero>
    <Wrapper style={{padding:'0px'}}>     
        <SWrapper>
        <Body>
        <Title>Our Capabilities</Title>
            <SGrid>
            <Rotate top left>
            <Card>
                <CardContent>
                    <CardTitle>Predictive Analysis</CardTitle>
                    <CardText>{SoftData.content}</CardText>
                </CardContent>
                <CardImage alt='Software Picture' src={SoftData.image} />
            </Card>
            </Rotate>
            <Rotate bottom left>
            <Card>
                <CardContent>
                    <CardTitle>Historical Analysis</CardTitle>
                    <CardText>{DataAnalysis.content}</CardText>
                </CardContent>
                <CardImage alt='Software Picture' src={DataAnalysis.image} />
            </Card>
            </Rotate>
            <Rotate>
            <Card top right>
                <CardContent>
                    <CardTitle>Forecast Analysis</CardTitle>
                    <CardText>{MLData.content}</CardText>
                </CardContent>
                <CardImage alt='Software Picture' src={MLData.image} />
            </Card>
            </Rotate>
            <Rotate bottom>
            <Card>
                <CardContent>
                    <CardTitle>Market Analysis</CardTitle>
                    <CardText>{SoftData.content}</CardText>
                </CardContent>
                <CardImage alt='Software Picture' src={SoftData.image} />
            </Card>
            </Rotate>
            <Rotate right>
            <Card>
                <CardContent>
                    <CardTitle>Assessment Analysis</CardTitle>
                    <CardText>{SoftData.content}</CardText>
                </CardContent>
                <CardImage alt='Software Picture' src={SoftData.image} />
            </Card>
            </Rotate>
            <Rotate right>
            <Card>
                <CardContent>
                    <CardTitle>Digital solutions</CardTitle>
                    <CardText>{SoftData.content}</CardText>
                </CardContent>
                <CardImage alt='Software Picture' src={SoftData.image} />
            </Card>
            </Rotate>
            <Rotate right>
            <Card>
                <CardContent>
                    <CardTitle>Supply Chain Analysis</CardTitle>
                    <CardText>{SoftData.content}</CardText>
                </CardContent>
                <CardImage alt='Software Picture' src={SoftData.image} />
            </Card>
            </Rotate>
           </SGrid>
        </Body>
        </SWrapper>  
        <SWrapper color='white' bg='#160119' style={{borderRadius:'1em'}}> 
        <Body>
            <Title>What We Can Do</Title>
            <SGrid>
                <Rotate top left>
                <Card>
                    <CardContent>
                    <CardTitle>Predictive Analysis</CardTitle>
                    <CardText>{SoftData.content}</CardText>
                    </CardContent>
                    <CardImage alt='Software Picture' src={SoftData.image} />
                </Card>
                </Rotate>
                <Rotate bottom left>
                <Card>
                    <CardContent>
                    <CardTitle>Historical Analysis</CardTitle>
                    <CardText>{DataAnalysis.content}</CardText>
                    </CardContent>
                    <CardImage alt='Software Picture' src={DataAnalysis.image} />
                </Card>
                </Rotate>
                <Rotate>
                <Card top right>
                    <CardContent>
                    <CardTitle>Forecast Analysis</CardTitle>
                    <CardText>{MLData.content}</CardText>
                    </CardContent>
                    <CardImage alt='Software Picture' src={MLData.image} />
                </Card>
                </Rotate>
            </SGrid>
        </Body>
        </SWrapper>
        <SWrapper>
            <Body>
            <Rotate top left>
            <Card>
                <Rows>
                    <CardColumn>
                      <PageTitle>Predictive Analysis</PageTitle>
                      <PageText>{SoftData.content}</PageText>
                    </CardColumn>
                    <Image alt='Software Picture' src={SoftData.image} />
                </Rows>
            </Card>
            </Rotate>
            </Body>
        </SWrapper>
            <SWrapper bg='rgba(0,0,0,.5)'>
                <Body>
                <Rotate bottom left>
                    <Card>
                        <Rows>
                            <CardImage alt='Software Picture' src={DataAnalysis.image} />
                            <CardContent>
                                <CardTitle>Get your work done</CardTitle>
                                <CardText><Email href='mailto:datawareanalytics@gmail.com'>datawareanalytics@gmail.com</Email></CardText>
                                <CardText> SMS: +234 8081 391727</CardText>
                                <CardText> WhatsApp: +234 8081 391727</CardText>
                            </CardContent>
                        </Rows>
                    </Card>
                </Rotate>
                </Body>
            </SWrapper>
    </Wrapper>
    </>
  )
}
