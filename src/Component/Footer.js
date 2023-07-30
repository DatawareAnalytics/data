import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function Footer() {
  const navigate = useNavigate()
  return (
    <Wrapper>
          <Row>
            <Container>
                <Link onClick={()=>navigate('/')}>Home</Link>
                <Link onClick={()=>navigate('/Our-Services')}>Services</Link>
                <Link onClick={()=>navigate('/Courses')}>Training</Link>
                <Link onClick={()=>navigate('/About')}>About</Link> 
            </Container>
            <Container>
                <h3>Contact Us</h3>
                <Text>Email:&nbsp;<a href='mailto:datawareanalytics@gmail.com'>datawareanalytics@gmail.com</a></Text>
                <Text>Sms: &nbsp; +234 8081 3917 27</Text>
                <Text>WhatsApp: &nbsp; +234 8081 3917 27</Text>
             <Text>Dataware Analytics &nbsp;&nbsp;AllRight Reserved {new Date().getFullYear()}</Text>
            </Container>
          </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
padding: 2em;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
background: rgb(20,20,40);
color: #BBBDC0;
height: auto;

@media screen and (max-width:700px){
  flex-direction: column;
}
`
export const Container = styled.div`
width: 100%;
background-color: transparent;
margin: 10px auto;
`
const Row = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
background-color: transparent;

@media screen and (max-width:700px){
  flex-direction: column;
}
`
const Link = styled.a`
padding: 10px;
font-size: 1em;
font-weight: bold;
cursor: pointer;
color: inherit;
width: 100%;
list-style: none;
list-style-type: none;
text-decoration: none;
background-color: transparent;
`
const Text = styled.div`
padding: 10px;
color: inherit;
width: 100%;
background-color: transparent;
`