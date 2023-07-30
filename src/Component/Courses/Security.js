import React from 'react'
import { Content,  Wrapper } from '../detailStyle'
import { Card, CardColumn, Email, Image,  PayCardText, PayCardTitle, Rows } from '../../Pages/Styled'
import { Fade } from 'react-reveal'
import {Container, PageTitle, Text, Title} from '../../GlobalStyled'
export const Naira = new Intl.NumberFormat('ng-NG')
export default function Security() {
  
  return (
    <Container>
        <Wrapper>
          <Content>
            <Title>Cyber Security Professional Cohort-August-2023</Title>
            <Text>Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security. The term applies in a variety of contexts, from business to mobile computing</Text>
            <Text>The global cyber threat continues to evolve at a rapid pace, with a rising number of data breaches each year. A report by RiskBased Security revealed that a shocking 7.9 billion records have been exposed by data breaches in the first nine months of 2019 alone. This figure is more than double (112%) the number of records exposed in the same period in 2018.</Text>
            <Text>As Cyber Threats increases every day, the demand for cyber security experts also increases to depend our networks, devices, computers and operational tools. The course will make you ready to join the train of cyber security experts.</Text>
            <PageTitle>What you'll learn:</PageTitle>
              <Fade bottom left>
                <Text>Kali Linux For Penetration Testers(Hackers)</Text>
                <Text>Parrot Security For Penetration Testers(Hackers)</Text>
                <Text>Python for Hackers</Text>
                <Text>Network Analysis</Text>
                <Text>Nework Vulnerabilities</Text>
                <Text>Encryption Algorithms</Text>
                <Text>JavaScript</Text>
                <Text>Html</Text>
                <Text>Cyber Attacks</Text>
                <Text>Risk Mitigation</Text>
              </Fade>
            <PageTitle>The Skill You will get:</PageTitle>
              <Fade top right>
                <Text>Network Security</Text>
                <Text>Application Security</Text>
                <Text>Information Security</Text>
                <Text>End-user Protection</Text>
                <Text>Disaster Recovery</Text>
                <Text>Operational Security</Text>
              </Fade>
            <PageTitle>Job Profile</PageTitle>
              <Fade bottom>
                <Text>Network Engineer</Text>
                <Text>Network Architect</Text>
                <Text>Network Analyst</Text>
                <Text>Malware Analyst</Text>
                <Text>Cyber Security Engineer</Text>
                <Text>Penetration Tester</Text>
                <Text>Certified Ethical Hacker (CEH)</Text>
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
