import React, { useEffect } from 'react'
import { Content, Wrapper } from '../detailStyle'
import { Card, CardColumn, Email, Image, PayCardText, PayCardTitle, Rows } from '../../Pages/Styled'
import { Fade, } from 'react-reveal'
import {Container, PageTitle, Text, Title} from '../../GlobalStyled'
export const Naira = new Intl.NumberFormat('ng-NG')

export default function ML() {
  useEffect(()=>{
    return(()=>document.title = 'Introduction machine learning Certification')
  })
  return (
    <Container>
        <Wrapper>
          <Content>
            <Title>Introduction Machine Learning Cohort-August-2023</Title>
            <PageTitle>Start on 11/08/2023</PageTitle>
            <PageTitle>Every Friday 4-6pm</PageTitle>
            <PageTitle>6 Weeks</PageTitle>
            <Text>Machine learning is an exciting branch of Artificial Intelligence, and it’s all around us. Machine learning brings out the power of data in new ways, such as Facebook suggesting articles in your feed. This amazing technology helps computer systems learn and improve from experience by developing computer programs that can automatically access data and perform tasks via predictions and detections.</Text>
            <Text>Machine Learning is, undoubtedly, one of the most exciting subsets of Artificial Intelligence. It completes the task of learning from data with specific inputs to the machine. It’s important to understand what makes Machine Learning work and, thus, how it can be used in the future. </Text>
            <Text>At a high level, machine learning is the ability to adapt to new data independently and through iterations.  Applications learn from previous computations and transactions and use “pattern recognition” to produce reliable and informed results.</Text>
            <Text>In this course we learn what is machine learning exactly and how its build and used in practical world. Ten(10) different machine projects we be build in this course.</Text>
            <PageTitle>What you'll learn:</PageTitle>
              <Fade bottom left>
                <Text>Data Colllection</Text>
                <Text>Data Preprocessing and Data Processing</Text>
                <Text>Data Explorations</Text>
                <Text>Data Transformations and Data Manipulation</Text>
                <Text>Classification Algorithms</Text>
                <Text>Regression Algorithms</Text>
                <Text>Clustering Algorithms</Text>
                <Text>Un-Supervised learning model</Text>
                <Text>Supervised learning model</Text>
                <Text>Machine Learning Model Building</Text>
                <Text>Machine Learning Model Hosting</Text>
              </Fade>
            <PageTitle>The Skill You will get:</PageTitle>
              <Fade top right>
                <Text>Data Modelling</Text>
                <Text>Data Visualization</Text>
                <Text>Feature Engineering</Text>
                <Text>Machine Learning Metrics</Text>
                <Text>Machine Learning Algorithms</Text>
                <Text>Python basic</Text>
                <Text>Mathematics for Machine Learning</Text>
                <Text>Problem Solving Skill</Text>
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
