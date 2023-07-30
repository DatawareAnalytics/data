import React, { useEffect } from 'react'
import { Body, Wrapper, Hero, HeroWrapper, HeroContent, Email } from '../../Pages/Styled'
import { PageTitle,Title} from '../../GlobalStyled'
import { Rotate } from 'react-reveal'
import { CardContent, CardImage, CardTitle, SWrapper, CardText, CardImageBig } from '../ServicesStyled'
import { Analysis, IndData, SliderSettings} from '../../data/DataFile'
import { Card, CardRow } from '../Master-Styled'
import Slider from 'react-slick'


export default function DataServices() {
    useEffect(()=>{
        return(()=>document.title = 'Data Analysis Services')
      })
    const reverse = false
  return (
    <>
    <Hero>
        <HeroWrapper>
            <HeroContent>
                <Title>Data Analytics Consult</Title>
                <PageTitle>Data Analysis experts teams we are ready to take up your challenge and solve it based on our expert knowledge in different domain.</PageTitle>
            </HeroContent>
        </HeroWrapper>
        </Hero>
    <Wrapper>  
      <SWrapper>
        <Body>  
            <Card>
               <CardTitle>Data Analysis Services</CardTitle>
               <CardRow reverse={reverse}>
                <CardContent>
                 <CardText> We identify use cases that can deliver against your business priorities and create analytics solutions with the right talent and technologies to suit your needs. Your data’s destiny is one that can be leveraged to lift performance, resilience, and growth for years to come.</CardText>
                </CardContent>
                <CardImageBig src={require('../../asset/images/idea.jpeg')} />
              </CardRow>
            </Card>
            </Body>
            </SWrapper>
            <SWrapper bg='rgba(0,0,0,.1)'>
                <Body>
                    <Rotate top right>
                        <Card>
                            <CardTitle>Data And Analytics Strategy</CardTitle>
                            <CardRow reverse={!reverse}>
                                <CardContent>
                                  <CardText>Data is everywhere, streaming across our world through a growing array of sensors, applications, and business models.</CardText>
                                   <CardText>A data and analytics strategy is foundational for any business transformation. We help you establish strong, responsible practices that set the stage for growth.</CardText>
                                   <CardText>In the right environment, with the right enablers, data and analytics drive growth. We develop the strategic, technical, and human capabilities that take companies from vision to value—and create truly data-driven organizations.</CardText>  
                                </CardContent>
                                <CardImageBig src={require('../../asset/images/data3.jpg')} />
                            </CardRow>
                        </Card>
                  </Rotate>
                </Body>
            </SWrapper>
            <SWrapper bg='rgba(0,0,0,0)'>
                <Body>
                    <Rotate top left>
                        <Card>
                            <CardTitle>Our Services include</CardTitle>
                            <CardRow>
                                <CardContent>
                                    <CardText>Data Discovery</CardText>
                                    <CardText>Data Transformation</CardText>
                                    <CardText>Data Management</CardText>
                                    <CardText>Data Augmentation</CardText>
                                    <CardText>GenerativeAI</CardText>
                                    <CardText>Business Process</CardText>
                                    <CardText>Provide industrial solution from the data</CardText>
                                </CardContent>
                                <CardImageBig src={require('../../asset/images/data2.jpg')} />
                            </CardRow>
                        </Card>
                    </Rotate>
                </Body>
            </SWrapper>
            <SWrapper bg='rgba(0,0,0,.3)'>
                <Body>
                    <Card>
                        <CardTitle>We specialized in different Data Analysis</CardTitle>
                    <Slider {...SliderSettings}>
                        {Analysis.map((data,i)=>(
                            <Card key={i}>
                            <CardImage alt={data.title}  src={data.icon}/>
                            <CardContent>
                                <CardText>{data.title}</CardText>
                                {/* <CardText>{data.content}</CardText> */}
                            </CardContent>
                            </Card>
                        ))}
                    </Slider>
                    </Card>                
                </Body>
            </SWrapper>
            <SWrapper bg='rgba(0,0,0,.2)'>
                <Body>
                    <Card>
                        <CardTitle>We work for different industries</CardTitle>
                    <Slider {...SliderSettings}>
                        {IndData.map((data,i)=>(
                            <Card key={i}>
                            <CardImage alt={data.title}  src={data.icon}/>
                            <CardContent>
                                <CardText>{data.title}</CardText>
                                {/* <CardText>{data.content}</CardText> */}
                            </CardContent>
                            </Card>
                        ))}
                    </Slider>
                    </Card>                
                </Body>
            </SWrapper>
            <SWrapper bg='rgba(0,0,0,0)'>
                <Body>
                    <Rotate top right>
                        <Card>
                            <CardTitle>Lets talk for your next projects</CardTitle>
                            <CardRow reverse={reverse}>
                                <CardContent>  
                                <CardText>Email: &nbsp;<Email href='mailto:datawareanalytics@gmail.com'>datawareanalytics@gmail.com</Email></CardText>
                                <CardText>SMS: &nbsp;+234 8081 3917 27</CardText>
                                <CardText>WhatsApp: &nbsp;+234 8081 3917 27</CardText>
                                </CardContent>
                                <CardImage style={{height:'50%',width:'50%',}} src={require('../../asset/icons/undraw_Conversation_re_c26v.png')} />
                            </CardRow>
                        </Card>
                  </Rotate>
                </Body>
            </SWrapper>           
      </Wrapper>
    </>
  )
}
