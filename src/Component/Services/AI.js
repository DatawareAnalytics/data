import React, { useEffect } from 'react'
import { Body, Wrapper, Hero, HeroWrapper, HeroContent, Email } from '../../Pages/Styled'
import { PageTitle,Title} from '../../GlobalStyled'
import { Rotate } from 'react-reveal'
import { CardContent, CardImage, CardTitle, SWrapper, CardText, CardImageBig } from '../ServicesStyled'
import { AIData, IndData, SliderSettings,} from '../../data/DataFile'
import { Card, CardRow } from '../Master-Styled'
import Slider from 'react-slick'


export default function AI() {
    useEffect(()=>{
        return(()=>document.title = 'Artificial Intelligence Services')
      })
    const reverse = false
  return (
    <>
    <Hero>
        <HeroWrapper>
            <HeroContent>
                <Title>Artificial Intelligence Consult</Title>
                  <Card>
                    <PageTitle>Artificial Intelligence experts teams are ready to take up your challenge and solve it based on our expert knowledge in different domain.</PageTitle>                  
                  </Card>
            </HeroContent>
        </HeroWrapper>
        </Hero>
    <Wrapper>  
      <SWrapper>
        <Body>  
            <Card>
               <CardTitle>Artificial Intelligence Consult Team</CardTitle>
               <CardRow reverse={!reverse}>
                <CardContent>
                 <CardText>Our Artificial Intelligence are technical experts who typically provide guidance and management for a project from the beginning stages of design to deployment. They work to understand their clients’ business goals and design software to meet those needs. They are partner with other software team members, such as analysts and software engineers, to ensure development projects are completed as designed, on time, and within budget.</CardText>
                </CardContent>
                <CardImageBig src={require('../../asset/images/ml4.webp')} />
              </CardRow>
            </Card>
            </Body>
            </SWrapper>
            <SWrapper bg='rgba(0,0,0,.3)'>
                <Body>  
                    <Card>
                    <CardTitle>Our team will help you to avoid development regret by practicing</CardTitle>
                    <CardRow reverse={reverse}>
                            <CardContent>
                                <CardText>Regulatory compliance</CardText>
                                <CardText>Biased free model training</CardText>
                                <CardText>Algorithms explainability and accuracy</CardText>
                            </CardContent>
                            <CardImageBig src={require('../../asset/images/itkis.jpg')} />
                        </CardRow>
                    </Card>
                </Body>
            </SWrapper>
            <SWrapper bg='rgba(0,0,0,0)'>
                <Body>
                    <Rotate top left>
                        <Card>
                            <CardTitle>Artificial Intelligence Application Developmemt Team</CardTitle>
                            <CardRow reverse={!reverse}>
                                <CardContent>
                                    <CardText>We build smart systems where artificial intelligence can identify trends, anomalies, and growth hacking opportunities in your operational processes to assist in informed executive-level decision making.</CardText>
                                </CardContent>
                                <CardImageBig src={require('../../asset/images/ml6.jpeg')} />
                            </CardRow>
                        </Card>
                    </Rotate>
                </Body>
            </SWrapper>
            <SWrapper bg='rgba(0,0,0,.3)'>
                <Body>
                    <Rotate top left>
                        <Card>
                            <CardTitle>We have Expert and Experienced Team</CardTitle>
                            <CardRow>
                                <CardContent>
                                    <CardText>As an experienced AI service provider, we conceptualize and implement artificial intelligence use cases for a range of purposes, each contributing to business continuity and long-term efficiency. Our team incorporates AI-driven solutions into business operations where they can bring tangible value</CardText>
                                </CardContent>
                                <CardImageBig src={require('../../asset/images/net.jpg')} />
                            </CardRow>
                        </Card>
                    </Rotate>
                </Body>
            </SWrapper>
            <SWrapper bg='rgba(0,0,0,0)'>
                <Body>
                    <Rotate top left>
                        <Card>
                            <CardTitle>Artificial intelligence can improve your business in many ways</CardTitle>
                            <CardRow>
                                <CardContent>
                                    <CardText>Cost Reduction</CardText>
                                    <CardText>Human labor Reduction</CardText>
                                    <CardText>Real-time decision making</CardText>
                                    <CardText>Risk minimization</CardText>
                                </CardContent>
                                <CardImageBig src={require('../../asset/images/ml01.jpeg')} />
                            </CardRow>
                        </Card>
                    </Rotate>
                </Body>
            </SWrapper>
            <SWrapper bg='rgba(0,0,0,.3)'>
                <Body>
                    <Card>
                        <CardTitle>Our Approach Services Includes</CardTitle>
                    <Slider {...SliderSettings}>
                        {AIData.map((data,i)=>(
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
                            <CardTitle>Business Strategy</CardTitle>
                                <CardContent>  
                                   <CardText>Our consultancy services span a variety of digital transformation solutions for clients around the world. Some clients needed a focus on big data while other companies required e-commerce services. Consulting on cloud computing transformations and enterprise software integrations require specialized technological understanding combined with a track record of digital expertise, both of which you get with us.</CardText>
                                   <CardText>Companies seek the competitive advantages of software consulting companies for many reasons. Whether you’re simply in need of project management expertise or you need an entirely new software system, software consulting can take care of the details, so you and your team can focus on big picture business items.</CardText>
                                   <CardText>We will be here to provide answers to all your questions–big and small. Should you use cloud platforms or should you buy servers? Do you need to build mobile products for your employees? Should you be outsourcing your support? What expertise should you hire in-house vs use consultants to perform? We take partnership seriously and will provide you with the right expertise and strategy for a long term relationship.</CardText>
                                </CardContent>
                        </Card>
                  </Rotate>
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
