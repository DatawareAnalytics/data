import React from 'react'

import { ContactWrapper, Content,  Wrapper } from '../detailStyle'
import { Email, PayCard, PayCardText, PayCardTitle, PaymentGrid } from '../../Pages/Styled'
import { Fade, Rotate } from 'react-reveal'
import {Container, PageTitle, Text, Title} from '../../GlobalStyled'

export const Naira = new Intl.NumberFormat('ng-NG')
export default function DataPython() {
    
  return (
    <Container>
        <Wrapper>
          <Content>
            <Title>Data Science with Python Cohort-August-2023</Title>
            <Text>Python is one of the best and fastest-growing programming languages used in data analysis worldwide. This free online course shows you how to apply the fundamental programming concepts of Python such as looping, variables, data types and data structures to data science. It also explores the NumPy and Pandas libraries that will help you further manipulate, analyze and visualize data in Python.</Text>
            <Text>Kickstart your learning of Python with this beginner-friendly self-paced course taught by an expert. Python is one of the most popular languages in the programming and data science world and demand for individuals who have the ability to apply Python has never been higher.</Text>
            <PageTitle>What you'll learn:</PageTitle>
            <Fade bottom left>
               <Text>Basic of Python programming</Text>
               <Text>Demonstrate proficiency in using Python libraries such as Pandas, Numpy, and Matplotlib.</Text>
              <Text>Data Preprocessing</Text>
              <Text>Data Explorations</Text>
              <Text>Data Transformations </Text>
              <Text>Data Manipulation</Text>
              <Text>Data Visualization</Text>
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
            </Content>
            <ContactWrapper>
                <Title>Interested to our programs</Title>
                <PayCardText>Make your payment to the following Bank Account and send your informations to the our Email Address. We will send the link before the session commence.</PayCardText>
                <PaymentGrid>
                    <PayCard>
                        <Rotate right left>
                            <PayCardTitle>Send Your Information:</PayCardTitle>
                            <PayCardText>Active Email Address</PayCardText>
                            <PayCardText>WhatsApp Number</PayCardText>
                            <PayCardText>Course and Cohort Names</PayCardText>
                            <PayCardText>Payment Proop</PayCardText>
                            <Email href='mailto:datawareanalytics@gmail.com'>datawareanalytics@gmail.com</Email>
                        </Rotate>
                    </PayCard>
                    <PayCard>
                        <Rotate right left>
                            <PayCardTitle>Payments:</PayCardTitle>
                            <PayCardText>Account Number:&nbsp; 2101686426</PayCardText>
                            <PayCardText>Account Name:&nbsp; Sani Muhammad Sani</PayCardText>
                            <PayCardText>Bank Name:&nbsp; United Bank For Africa (UBA)</PayCardText>
                        </Rotate>
                    </PayCard>
                </PaymentGrid>
            </ContactWrapper>
        </Wrapper>
    </Container>
  )
}
