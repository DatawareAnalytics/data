import React, { useEffect } from 'react'
import { CardColumn,Body, Card, Image,Rows, Wrapper, Hero, HeroWrapper, HeroContent, Grid, ListText, Email, PayCardTitle, PayCardText } from './Styled'
import { ButtonLarge, Container, PageText, PageTitle, Text, Title } from '../GlobalStyled'
import { CoursesData, } from '../data/Data'
import {Rotate} from 'react-reveal'

export const Naira = new Intl.NumberFormat('ng-NG')

export default function Courses() {
    useEffect(()=>{
        return(()=>document.title = 'Our Courses')
      })
  return (
    <div>
    <Hero>
        <HeroWrapper>
            <HeroContent>
                <Title>Dataware Analytics Training Programs</Title>
                <Card>
                    <Container>
                        <Text>We Provide you the best learning interaction with our instructors. Our Instroctors are industry experts with relative experience over decades. We've trained thousands of candidate from different background and professions who's are now working with top tech services providers, you can join them in our next COHORTS.</Text>
                        <Text></Text>
                        <Text>Our goal is to take you to the top in your career or to help you switch to tech sector and get your seat at end of our programs.</Text>
                        <Text>You choose your favourite course that relate to the carrer you want in IT and we trained you with the best efforts and experiencies that drag you to top.</Text>
                    </Container>
                </Card>
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
                                <ButtonLarge onClick={()=>window.location.pathname=data.link}>See Details</ButtonLarge>
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
