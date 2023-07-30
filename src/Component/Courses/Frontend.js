import React, { useEffect } from 'react'
import { Content, Wrapper } from '../detailStyle'
import { Card, CardColumn, Email, Image, ListTitle, PayCardText, PayCardTitle, Rows } from '../../Pages/Styled'
import { Fade, } from 'react-reveal'
import {Container, PageTitle, Text, Title} from '../../GlobalStyled'

export const Naira = new Intl.NumberFormat('ng-NG')
export default function Frontend() {
  useEffect(()=>{
    return(()=>document.title = 'Front End Developer Certification')
  })
  return (
    <Container>
        <Wrapper>
          <Content>
            <Title>Front-End Developer Cohort-August-2023</Title>
            <PageTitle>Start on 6/08/2023</PageTitle>
            <PageTitle>Every Sunday 10-12pm</PageTitle>
            <PageTitle>6 Weeks</PageTitle>
            <Text>A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app. When you visit a website, the design elements you see were created by a front-end developer.</Text>
             <Text>Front-end developers create user interfaces (UI). UI is the graphical layout of an application that determines what each part of a site or application does and how it will look</Text>
             <Text>A career as a front-end web developer can flex your creativity and problem-solving skills. As a field that is constantly evolving to incorporate new technology, front-end development can reward those who like to learn new things and face challenges. By completing this you will be certified as Front-End Developer.</Text>
              <Fade bottom left>
                <ListTitle>Front End Development</ListTitle>
                <Text>Html</Text>
                <Text>Css</Text>
                <Text>React</Text>
                <Text>JavaScript</Text>
                <Text>Bootstrap</Text>
                <Text>React Mui</Text>
              </Fade>
            <Fade bottom right>
            <PageTitle>The Skill You will get:</PageTitle>
            </Fade>
              <Fade top left>
                <Text>Build a web application using html</Text>
                <Text>build web Application using JavaScript</Text>
                <Text>Use css and Bootstrap to style a website</Text>
                <Text>Build web application using React Mui</Text>
                <Text>Website Hosting</Text>
            </Fade>
            <Card>
                <Rows>
                    <CardColumn>
                        <Title>Interested</Title>
                         <PayCardTitle>Payments:</PayCardTitle>
                        <PayCardText>Account Number:&nbsp; 2101686426</PayCardText>
                        <PayCardText>Account Name:&nbsp; Sani Muhammad Sani</PayCardText>
                        <PayCardText>Bank Name:&nbsp; United Bank For Africa (UBA)</PayCardText>
                    </CardColumn>
                    <Image alt='Software Picture' src={require('../../asset/images/done.jpg')} />
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
                    <Image alt='Software Picture' src={require('../../asset/images/done.jpg')} />
                </Rows>
            </Card>
            </Content>
        </Wrapper>
    </Container>
  )
}
