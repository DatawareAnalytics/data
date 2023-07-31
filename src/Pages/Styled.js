import styled from 'styled-components'

export const Hero = styled.div`
width: 100%;
display: flex;
background-color: transparent;
background-color: #330033;
background-image: url('../asset/images/hr1.png');
background-repeat: no-repeat;
justify-content: center;
padding: 10px;
padding-bottom: 2em;
`
export const HeroWrapper = styled.div`
width: 100%;
color: #BBBDC0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: transparent;
`
export const HeroContent = styled.div`
width: 80%;
height: 100%;
padding: 3em;

@media screen and (max-width:700px) {
    padding: 0px;
}
`
export const Wrapper = styled.div`
width: 100%;
background: transparent;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
export const Body = styled.div`
width: 80%;
padding: 10px;
background-color: transparent;

@media screen and (max-width:600px){
    width:100%;
    padding: 0px;
}
`
export const Card = styled.div`
width: 100%;
padding: 2em;
display: flex;
align-items: center;
justify-content: space-around;
margin: 1em auto;
`
export const Rows = styled.div`
display: flex;
justify-content: space-between;
flex-direction: ${({reverse})=>(reverse ? 'row-reverse': 'row')};
width: 100%;
align-items: center;

@media screen and (max-width:800px){
    flex-direction: column;
}
`
export const Email = styled.a`
cursor: pointer;
font-size: 20px;
font-weight: bold;

@media screen and (max-width:500px) {
    font-size: 16px;
}
` 
export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(1,100%);
`
export const PaymentGrid = styled.div`
display: grid;
grid-template-columns: repeat(2,50%);
grid-gap: 10px;
width:100%;
padding: 20px;

@media screen and (max-width:700px){
    grid-template-columns: repeat(1,100%);
    padding: 0px;
}
`
export const PayCard = styled.div`
width: 100%;
padding: 2em;
margin: 1em auto;

@media screen and (max-width:600px){
    padding: 10px;
}
`
export const PayCardTitle = styled.div`
font-size: 2em;
padding: 10px;
margin: 10px auto;
`
export const Text = styled.div`
font-size: 17px;
padding: 10px;
align-items: center;
`
export const PayCardText = styled.div`
font-size:18px;
padding: 10px;
margin: 10px auto;
`
export const CardColumn = styled.div`
width: 50%;
flex-direction: column;
padding: 10px;

@media screen and (max-width:800px){
    width:100%;
}
`
export const Image = styled.img`
width: 50%;
padding: 10px;
border-radius: 2em;
object-fit: cover;

@media screen and (max-width:800px){
    width: 100%;
}
`
//Lists

export const ListCard = styled.div`
width: 100%;
padding: 2em;
margin: 10px auto;
display: flex;
flex-direction: column;
`
export const ListTitle = styled.div`
padding: 10px;
width: 100%;
font-size: 20px;
font-weight: bold;
text-transform: capitalize;
`
export const ListText = styled.div`
padding: 10px;
font-size: 20px;
width: 100%;
`
export const Price = styled.div`
padding: 10px;
font-size: 17px;
font-style: italic;
font-weight: bold;
`
export const PriceWrapper = styled.div`
width: 100%;
padding: 20px;
border-radius: 1em;
margin: 10px auto;
background-color: green;
color: #fff;
`
export const ContactWrapper = styled.div`
width: 100%;
padding: 10em;
align-items: center;
display: flex;
flex-direction: column;
border-radius: 6em 6em 0 0;
background: rgb(20,20,40);
color: #BBBDC0;

@media screen and (max-width:800px){
    padding: 2em;
}
`
export const ListTextLi = styled.li`
padding: 10px;
font-size: 20px;
width: 100%;
`