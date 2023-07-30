import React, { useEffect } from 'react'

import {  Content, Wrapper } from '../detailStyle'
import { Card, CardColumn, Email, Image, PayCardText, PayCardTitle, Rows } from '../../Pages/Styled'
import { Fade, } from 'react-reveal'
import {Container, PageTitle, Text, Title} from '../../GlobalStyled'

export const Naira = new Intl.NumberFormat('ng-NG')
export default function DataAnalysis() {
  useEffect(()=>{
    return(()=>document.title = 'Data Analysis Certification')
  })
   
  return (
    <Container>
        <Wrapper>
          <Content>
            <Title>Data Analysis Cohort-August-2023</Title>
            <PageTitle>Start on 5/08/2023</PageTitle>
            <PageTitle>Every Saturday 10-12pm</PageTitle>
            <PageTitle>6 Weeks</PageTitle>
            <Text>Data analytics is the science of analyzing raw data to make conclusions about that information. Many of the techniques and processes of data analytics have been automated into mechanical processes and algorithms that work over raw data for human consumption.</Text>
            <Text>Data analytics can do much more than point out bottlenecks in production. Gaming companies use data analytics to set reward schedules for players that keep the majority of players active in the game. Content companies use many of the same data analytics to keep you clicking, watching, or re-organizing content to get another view or another click. </Text>
            <Text>In this course you learn the concept of Data Analysis from data collection to data-driven decisions by Analysing datasets from different domain and extract insight from data.</Text>
            <PageTitle>What you'll learn:</PageTitle>
            <Fade bottom left>
              <Text>PowerBI</Text>
              <Text>Excel</Text>
              <Text>Tableau</Text>
              <Text>MySql </Text>
              <Text>PosgresSql</Text>
            </Fade>
            <PageTitle>The Skill You will get:</PageTitle>
            <Fade bottom right>
              <Text>Predictive Analysis</Text>
              <Text>Descriptive Analysis</Text>
              <Text>Diagnostic Analysis</Text>
              <Text>Prescriptive Analysis</Text>
              <Text>Regression Analysis</Text>
              <Text>Time Series Analysis</Text>
              <Text>Factor Analysis</Text>
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
