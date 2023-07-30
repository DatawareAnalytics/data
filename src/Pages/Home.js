import React from 'react'
import { CImage, Card, CardButton, CardContent, CardFooter, CardHeader, CardRow, Container, HomeContainer, HomeHero, HomeWrapper, PageTitle, Row, Text, Title } from '../GlobalStyled'
import {MdArrowForward} from 'react-icons/md'
import { Email } from './Styled'


export default function Home() {
  return (
    <>
      <HomeHero>
        <Container style={{textAlign:"center",background:'transparent'}}>
          <Title> WE ARE HERE TO HELP YOU GROW YOUR BUSINESS AND COMPETE WITH OTHERS IN GLOBAL SPACE</Title>
        </Container>
      </HomeHero>
      <Container>
        <HomeContainer>
          <HomeWrapper>
            <Card>
              <CardHeader>
                <PageTitle>Software Development</PageTitle>
              </CardHeader>
              <Text>A software development company for a long in business excellence, we can develop reliable, scalable and secure software solutions from Mobile Application, Enterprise Application, Web Application to Intelligent Systems software. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.</Text>
              <CardRow>
                <CardContent>
                  <Text>We have very strong software development team with experts knowledge and high level of experiences from 
                    different domain. we are ready to go for your project at the right time with better solution in the best environment.
                  </Text>
                </CardContent>
                <CardContent>
                  <CImage alt='software image' src={require('../asset/images/med.jpg')}/>
                </CardContent>
              </CardRow>
              <CardFooter>
                <Row>
                  <Text></Text>
                  <CardButton href='/data/Software-Development-Services'>Explore More On Software Development <MdArrowForward/> </CardButton>
                </Row>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <PageTitle>Data Analysis</PageTitle>
              </CardHeader>
              <Text>We support businesses in achieving fact-based decision-making by converting their historical and real-time, traditional and big data into actionable insights. Our services are tailored to make the raw data and the environment ready, as well as strengthen the business with advanced analytics capabilities.</Text>
              <CardRow>
                <CardContent>
                <Text>Our Data Analytics teams are exciting to help you make a honourable decision with confidence of achieving long term result in a while by exploring your historical data. They are here for you from Data mining to Explorations, Transformations to visualizations to final reports. </Text>
                </CardContent>
                <CardContent>
                  <CImage alt='software image' src={require('../asset/images/pro.webp')}/>
                </CardContent>
              </CardRow>
              <CardFooter>
                <Row>
                  <Text></Text>
                  <CardButton href='/data/Data-Analysis-Services'>Explore More On Data Analytics <MdArrowForward/> </CardButton>
                </Row>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <PageTitle>Artificial Intelligence</PageTitle>
              </CardHeader>
              <Text>We help you move past the proof of concept stage and scale your AI transformation company-wide for a broader and more rewarding impact. Our artificial intelligence consultants will work out the best long-term AI strategy to help you create a sustainable, cohesive AI-driven ecosystem for your business.</Text>
              <CardRow>
                <CardContent>
                  <Text>AI experts team provides services that will help you realize how many opportunities come from implementing AI solutions into your business.</Text>
                  <Text>Artificial Intelligence influences most industries, among the most popular are: retail, eCommerce, manufacturing, finance, healthcare, marketing, and gaming sector.</Text>
                </CardContent>
                <CardContent>
                  <CImage alt='software image' src={require('../asset/images/suit.webp')}/>
                </CardContent>
              </CardRow>
              <CardFooter>
                <Row>
                  <Text></Text>
                  <CardButton href='/data/AI-Services'>Explore More On Artificial Intelligence <MdArrowForward/> </CardButton>
                </Row>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <PageTitle>IT Training support</PageTitle>
              </CardHeader>
              <CardRow>
                <CardContent>
                  <Text>We are also have a training team who's are ready to help you and your colleques by sharing their experiences with you. </Text>
                  <Text>They'll help you to upgrade your tech skills to the next level if you come from tech sector and help those that are not from tech sector to find place by taking brand new career in technology sector.</Text>
                  <Text>Our training covers different areas in IT especially fields like Software Engineering, Cyber Security, Mobile Applications,IoT Devices, Artificial Intelligence, Data Analytics and many more.</Text>
                </CardContent>
                <CardContent>
                  <CImage alt='software image' src={require('../asset/images/zoom.jpg')}/>
                </CardContent>
              </CardRow>
              <CardFooter>
                <Row>
                  <Text></Text>
                  <CardButton href='/data/Courses'>Explore More On Our Training Courses <MdArrowForward/> </CardButton>
                </Row>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <PageTitle>Lets Get In Touch For Our Services</PageTitle>
              </CardHeader>
              <CardRow>
                <CardContent>
                  <Text>Email: &nbsp;&nbsp; <Email href='mailto:datawareanalytics@gmail.com'>datawareanalytics@gmail.com</Email> </Text>
                  <Text>SMS: &nbsp;&nbsp; +234 8081 3917 27</Text>
                  <Text>WhatsApp: &nbsp;&nbsp; +234 8081 3917 27</Text>
                </CardContent>
                <CardContent>
                  <CImage alt='software image' src={require('../asset/images/done.jpg')}/>
                </CardContent>
              </CardRow>
            </Card>
          </HomeWrapper>
        </HomeContainer>
      </Container>
    </>
  )
}
