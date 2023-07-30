import React, { useEffect } from 'react'
import { Body, Wrapper, Hero, HeroWrapper, HeroContent, Email } from '../../Pages/Styled'
import { PageTitle,Title} from '../../GlobalStyled'
import { Rotate } from 'react-reveal'
import { CardContent, CardImage, CardTitle, SWrapper, CardText, CardImageBig } from '../ServicesStyled'
import { SoftwareData,SoftwareDataApp, IndData, SliderSettings} from '../../data/DataFile'
import { Card, CardRow } from '../Master-Styled'
import Slider from 'react-slick'


export default function WebDev() {
    useEffect(()=>{
        return(()=>document.title = 'Software Development Services')
      })
    const reverse = false
  return (
    <>
    <Hero>
        <HeroWrapper>
            <HeroContent>
                <Title>Software Developmemt Consult</Title>
                  <Card>
                    <PageTitle>Software Developmemt experts teams are ready to take up your challenge and solve it based on our expert knowledge in different domain.</PageTitle>                  
                  </Card>
            </HeroContent>
        </HeroWrapper>
        </Hero>
    <Wrapper>  
      <SWrapper>
        <Body>  
            <Card>
               <CardTitle>Software Consult Team</CardTitle>
               <CardRow reverse={!reverse}>
                <CardContent>
                 <CardText>Software consultants are technical experts who typically provide guidance and management for a project from the beginning stages of design to deployment. They work to understand their clients’ business goals and design software to meet those needs. Software consulting partners will work hand-in-hand with other software team members, such as analysts and software engineers, to ensure development projects are completed as designed, on time, and within budget.</CardText>
                </CardContent>
                <CardImageBig src={require('../../asset/images/hand-shake.jpg')} />
              </CardRow>
            </Card>
            </Body>
            </SWrapper>
            <SWrapper>
        <Body>  
            <Card>
               <CardTitle>Software Developmemt Team</CardTitle>
               <CardRow reverse={reverse}>
                <CardContent>
                 <CardText>Of course, we build the software itself. From invention to architecture to development and launch, nobody does an Agile software product build better. We have the resources to build solutions from scratch or integrate existing systems into one application that does exactly what your business needs.</CardText>
                </CardContent>
                <CardImageBig src={require('../../asset/icons/undraw_Code_review_re_woeb.png')} />
              </CardRow>
            </Card>
            </Body>
            </SWrapper>
            <SWrapper bg='rgba(0,0,0,.1)'>
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
            <SWrapper bg='rgba(0,0,0,0)'>
                <Body>
                    <Rotate top left>
                        <Card>
                            <CardTitle>Software Developmemt Approaches</CardTitle>
                            <CardRow>
                                <CardContent>
                                    <CardText>Problem understanding</CardText>
                                    <CardText>Project Scope Definition</CardText>
                                    <CardText>Project Developmemt</CardText>
                                    <CardText>Data Driven results</CardText>
                                    <CardText>Market Analysis</CardText>
                                </CardContent>
                                <CardImageBig src={require('../../asset/icons/undraw_Developer_activity_re_39tg.png')} />
                            </CardRow>
                        </Card>
                    </Rotate>
                </Body>
            </SWrapper>
            <SWrapper bg='rgba(0,0,0,.3)'>
                <Body>
                    <Card>
                        <CardTitle>We specialized in different Software Application Developmemt</CardTitle>
                    <Slider {...SliderSettings}>
                        {SoftwareDataApp.map((data,i)=>(
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
            <SWrapper bg='rgba(0,0,0,.3)'>
                <Body>
                    <Card>
                        <CardTitle>Our Software Application Developmemt Scope</CardTitle>
                    <Slider {...SliderSettings}>
                        {SoftwareData.map((data,i)=>(
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
