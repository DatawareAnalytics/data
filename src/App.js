import React from 'react'
import { Container, GlobalStyle } from './GlobalStyled'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'
import Appbar from './Component/Appbar'
import Footer from './Component/Footer'
import ML from './Component/Courses/ML'
import DataAnalysis from './Component/Courses/DataAnalysis'
import Full from './Component/Courses/Full'
import Security from './Component/Courses/Security'
import DataServices from './Component/Services/DataServices'
import WebDev from './Component/Services/DevServ'
import AI from './Component/Services/AI'
import CyberServices from './Component/Services/CyberServ'
import Services from './Pages/Services'
import Frontend from './Component/Courses/Frontend'
import Backend from './Component/Courses/Backend'
import DataPython from './Component/Courses/DataPython'

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Appbar/>
      <Container>
        <Routes>
            <Route path='/' exact index element={<Home/>} />
            <Route path='/*' exact index element={<Home/>} />
            <Route path='/data/Courses' element={<Courses/>} />
            <Route path='/data/About' element={<About/>} />
            <Route path='/data/Our-Services' element={<Services/>} />
            <Route path='/data/Data-Analysis-Services' element={<DataServices/>} />
            <Route path='/data/Software-Development-Services' element={<WebDev/>} />
            <Route path='/data/AI-Services' element={<AI/>} />
            <Route path='/data/Cyber-Security-Services' element={<CyberServices/>} />
            <Route path='/data/Machine-learning-certification' element={<ML/>} />
            <Route path='/data/Front-end-engineer-certification' element={<Frontend/>} />
            <Route path='/data/Data-science-with-python-certification' element={<DataPython/>} />
            <Route path='/data/Back-end-engineer-certification' element={<Backend/>} />
            <Route path='/data/data-analytics-certification' element={<DataAnalysis/>} />
            <Route path='/data/full-stack-development-certification' element={<Full/>} />
            <Route path='/data/cyber-security-certification' element={<Security/>} />
        </Routes>
      </Container>
      <Footer/>
    </>
  )
}
