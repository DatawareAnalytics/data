import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { MdClose, MdMenuOpen } from 'react-icons/md'

export default function Appbar() {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <Wrapper>
        <BrandWrapper onClick={()=>window.location.pathname='/'}>
          <Brand>Dataware</Brand>
          <BrandText>Analytics</BrandText>
        </BrandWrapper>
        <Nav showMenu={showMenu} onClick={()=>setShowMenu(!showMenu)}>
            <NavLinks onClick={()=>window.location.pathname='/data'}>Home</NavLinks>
            <NavLinks onClick={()=>window.location.pathname='/data/Our-Services'}>Services</NavLinks>
            <NavLinks onClick={()=>window.location.pathname='/data/Courses'}>Training</NavLinks>
            <NavLinks onClick={()=>window.location.pathname='/data/About'}>About</NavLinks>
        </Nav>
        <Hamburger>
            <Icon>
                {showMenu ? <MdClose onClick={(e)=>{
                    setShowMenu(false)
                    e.stopPropagation()
                    window.addEventListener('click',()=>setShowMenu(false))
                }} /> : <MdMenuOpen onClick={(e)=>{
                    setShowMenu(true)
                    e.stopPropagation()
                    window.addEventListener('click',()=>setShowMenu(false))
                }}/>}
            </Icon>
        </Hamburger>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
padding: 20px;
align-items: center;
display: flex;
justify-content: space-between;
background-color: #330033;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
color: #BBBDC0;
`
const Brand = styled.div`
font-size: 20px;
font-weight: bold;
`
const BrandText = styled.div`
font-size: 20px;
font-style: italic;
`
const BrandWrapper = styled.div`
flex-direction: column;
display: flex;
align-items: center;
padding: 10px;
cursor: pointer;
`
const Nav = styled.nav`
display: flex;
align-items: center;
padding: 10px;


@media screen and (max-width:600px){    
flex-direction: column;
visibility: ${({showMenu})=>(showMenu ? 'visible':'hiddent')};
opacity: ${({showMenu})=>(showMenu ? 1:0)};
background-color: #330033;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
position: absolute;
top: 6em;
left: 0;
right: 0;
z-index: 100;
height: 100vh;
}
`
const NavLinks = styled.div`
padding: 10px;
font-size: 18px;
font-weight: bold;
color: inherit;
width: 100%;
cursor: pointer;

:hover{
    font-style: italic;
}
@media screen and (max-width:600px){
    border-radius: 2em;
    margin: .5em auto;
    padding: 1em;
    width: fit-content;
}
`
const Hamburger = styled.div`
padding: 20px;
align-items: center;
display: flex;
flex-direction: column;
font-size: 3em;
font-weight: bold;
display: none;
cursor: pointer;

@media screen and (max-width:600px){
    display: flex;
}
`
const Icon = styled.div`
border-radius: 2em;
`