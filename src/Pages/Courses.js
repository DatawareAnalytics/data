import React, { useEffect } from 'react'
import { CardColumn,Body, Card, Image,Rows, Wrapper, Hero, HeroWrapper, HeroContent, Grid, ListText, Email, PayCardTitle, PayCardText } from './Styled'
import { ButtonLarge, PageText, PageTitle, Title } from '../GlobalStyled'
import { CoursesData, } from '../data/Data'
import {Rotate} from 'react-reveal'
import { useNavigate } from 'react-router-dom'

export const Naira = new Intl.NumberFormat('ng-NG')

export default function Courses() {
    const navigate = useNavigate()
    useEffect(()=>{
        return(()=>document.title = 'Our Courses')
      })
  return (
    <div>
    <Hero>
        <HeroWrapper>
            <HeroContent>
                <Title>Dataware Analytics Training Programs</Title>
            </HeroContent>
        </HeroWrapper>
        </Hero>
    <Wrapper>        
        <Body>
            <Grid>
                {CoursesData.map((data,i)=>{
                    return <Rotate clear>
                        <Card key={i}>
                            <Rows reverse={data.reverse}>
                                <CardColumn>
                                <PageTitle>{data.title}</PageTitle>
                                <PageText>{data.content}</PageText>
                                <ListText>{data.dates}</ListText>
                                <PageText>{data.time}</PageText>
                                <PageText>{data.duration}</PageText>
                                <PageText>&#8358;{Naira.format(data.price)}</PageText>
                                <ButtonLarge onClick={()=>navigate(data.link)}>See Details</ButtonLarge>
                                </CardColumn>
                                <Image alt='Software Picture' src={data.image} />
                            </Rows>
                        </Card>        
                    </Rotate>
                })}
            </Grid>
            <Card>
                <Rows>
                    <CardColumn>
                        <Title>Interested</Title>
                         <PayCardTitle>Payments:</PayCardTitle>
                        <PayCardText>Account Number:&nbsp; 2101686426</PayCardText>
                        <PayCardText>Account Name:&nbsp; Sani Muhammad Sani</PayCardText>
                        <PayCardText>Bank Name:&nbsp; United Bank For Africa (UBA)</PayCardText>
                    </CardColumn>
                    <Image alt='Software Picture' src={require('../asset/images/done.jpg')} />
                </Rows>
            </Card>
            <Card>
                <Rows>
                    <CardColumn>
                           <PayCardTitle>Send Your details:</PayCardTitle>
                            <PayCardText>Active Email Address</PayCardText>
                            <PayCardText>WhatsApp Number</PayCardText>
                            <PayCardText>Course and Cohort Names</PayCardText>
                            <PayCardText>Payment Proop</PayCardText>
                            <Email href='mailto:datawareanalytics@gmail.com'>datawareanalytics@gmail.com</Email>
                    </CardColumn>
                    <Image alt='Software Picture' src={require('../asset/images/done.jpg')} />
                </Rows>
            </Card>
            </Body>
            </Wrapper>
    </div>
  )
}
