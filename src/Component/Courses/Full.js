import React from 'react'
import { Content, Wrapper } from '../detailStyle'
import { Card, CardColumn, Email, Image, ListTitle, PayCardText, PayCardTitle, Rows } from '../../Pages/Styled'
import { Fade, } from 'react-reveal'
import {Container, PageTitle, Text, Title} from '../../GlobalStyled'

export const Naira = new Intl.NumberFormat('ng-NG')
export default function Full() {
  return (
    <Container>
        <Wrapper>
          <Content>
            <Title>Full Stack Developer(Engineer) Cohort-August-2023</Title>
            <Text>Full stack development refers to the end-to-end application software development, including the front end and back end. The front end consists of the user interface, and the back end takes care of the business logic and application workflows.</Text>
            <Text>Consider a retail website. Users can browse or purchase specific items, delete or add items in cart, change their profile, and do many other things. All these actions require a front-end user interface (UI), as well as some business logic, written in the back-end.</Text>
            <Text>A full stack developer is one who can single-handedly implement both the front-end and back-end workflows, like placing the order or changing the user profile.</Text>
            <Text>Full stack developers should be able to judge whether the selected technologies are the right choice for their project during the early phases.</Text>
            <Text>In this course you will both Front-End and Back-End technologies and build hands on projects that work in both side.</Text>
            <PageTitle>What you'll learn:</PageTitle>
              <Fade bottom left>
                <ListTitle>Front End Development</ListTitle>
                <Text>Html</Text>
                <Text>Css</Text>
                <Text>React</Text>
                <Text>JavaScript</Text>
                <ListTitle>Back End Development</ListTitle>
                <Text>NodeJS</Text>
                <Text>ExpressJS</Text>
                <Text>MongoDB</Text>
              </Fade>
            <Fade bottom right>
            <PageTitle>The Skill You will get:</PageTitle>
            </Fade>
              <Fade top left>
                <Text>Website Development</Text>
                <Text>Internet Application Development</Text>
                <Text>Back End Development</Text>
                <Text>Front End Development</Text>
                <Text>Database Management</Text>
                <Text>Data Encryption</Text>
                <Text>Website Hosting</Text>
              </Fade>
            <PageTitle>Job Profile</PageTitle>
              <Fade bottom>
                <Text>Back End Engineer</Text>
                <Text>Full Stack Engineer</Text>
                <Text>Fron End Engineer</Text>
                <Text>Web Developer</Text>
                <Text>Web Architect</Text>
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
