import React, { useEffect } from 'react'
import {  Content, Wrapper } from '../detailStyle'
import { Card, CardColumn, Email, Image,  PayCardText, PayCardTitle,  Rows } from '../../Pages/Styled'
import { Fade } from 'react-reveal'
import {Container, PageTitle, Text, Title} from '../../GlobalStyled'

export const Naira = new Intl.NumberFormat('ng-NG')
export default function Backend() {
  useEffect(()=>{
    return(()=>document.title = 'Back end Certification')
  })
  return (
    <Container>
        <Wrapper>
          <Content>
            <Title>Back-end Developer Cohort-August-2023</Title>
            <PageTitle>Start on 12/08/2023</PageTitle>
            <PageTitle>Every Saturday 4-6pm</PageTitle>
            <PageTitle>6 Weeks</PageTitle>
            <Text> Back-end developers work to develop the behind-the-scenes portions of a website or application, like data storage, security, site performance, or other server-side functions.</Text>
            <Text>Back-end developers write programs to run on servers. In this course You’ll learn how web servers receive and process requests for web pages, how they store data, and at least the basics of how to keep them high-performing and secure.</Text>
            <Text> Backend is the building block of any software without Backend software will not function well, having a strong foundation is crucial — that’s where Back-End Engineers come in. Get the specialized skills and portfolio you need to start your career as a Back-End Engineer in this curated career path.</Text>
            <PageTitle>What you'll learn:</PageTitle>
              <Fade bottom left>
                <Text>NodeJS</Text>
                <Text>Python</Text>
                <Text>ExpressJS</Text>
                <Text>MongoDB</Text>
                <Text>MySql</Text>
              </Fade>
            <Fade bottom right>
            <PageTitle>The Skill You will get:</PageTitle>
            </Fade>
              <Fade top left>
                 <Text>Database Management</Text>
                <Text>Data Encryption</Text>
                <Text>Build Backend application</Text>
                <Text>Rest API</Text>
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
