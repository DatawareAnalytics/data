import styled from "styled-components";

export const SWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 10px auto;
background-color: ${({bg})=>(bg ? bg:'transparent')};
color: ${({color})=>(color ? color:'inherit')};
`
export const Grid = styled.div`
display: grid;
grid-gap: 10px;
width: 100%;
background-color: transparent;
grid-template-columns: repeat(2,50%);

@media screen and (max-width:800px) {
 grid-template-columns: repeat(1,100%) ;
}
`
export const SGrid = styled.div`
display: grid;
grid-gap: 10px;
width: 100%;
background-color: transparent;
grid-template-columns: repeat(4,25%);

@media screen and (max-width:1000px) {
 grid-template-columns: repeat(2,50%) ;
}
@media screen and (max-width:600px) {
 grid-template-columns: repeat(1,100%) ;
}
`
export const Card = styled.div`
width: 100%;
padding: 10px;
margin: 1em auto;
display: flex;
background-color: transparent;
flex-direction: column;
`
export const CardBig = styled.div`
width: 100%;;
padding: 10px;
margin: 1em auto;
display: flex;
background-color: transparent;
flex-direction: column;
`
export const CardImage = styled.img`
width: 100%;
height: 10em;
border-radius: 2em;
`
export const ImgIcon = styled.img`
width: 50px;
border-radius: 2em;
`
export const CardImageBig = styled.img`
width: 50%;
object-fit: cover;
border-radius: 2em;

@media screen and (max-width:700px){
    width:100%;
}
`
export const CardTitle = styled.div`
font-size: 20px;
font-weight: bold;
padding: 5px;
`
export const CardText = styled.div`
font-size: 15px;
padding: 5px;
`
export const CardContent = styled.div`
width: 100%;
padding: 10px;
flex-direction: column;
height: fit-content;
`