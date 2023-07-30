import styled,{createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
`
export const Container = styled.div`
width: 100%;
background-color: transparent;
`
export const HomeHero = styled.div`
width: 100%;
height: 70vh;
padding: 2em;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #330033;
color: #fff;
`
export const HomeContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
`
export const HomeWrapper = styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: transparent;

@media screen and (max-width:700px){
    width:100%;
}
`

export const Row = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px;
width: 100%;
`
export const Column = styled.div`
width: 100%;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
`
export const Title = styled.div`
font-size: 2em;
padding: 10px;
align-items: center;
font-weight: bold;
`
export const PageTitle = styled.div`
font-size: 1.5em;
padding: 10px;
align-items: center;
margin: 10px auto;
font-weight: bold;
`
export const Text = styled.div`
font-size: 17px;
padding: 10px;
align-items: center;
`
export const PageText = styled.div`
font-size: 15px;
padding: 10px;
align-items: center;
`
export const ButtonLarge = styled.button`
text-align: center;
padding: 20px;
width: 100%;
margin: 10px auto;
background-color: #330033;
color: #BBBDC0;
font-size: 20px;
font-weight: bold;
border: none;
border-radius: 2em;
cursor: pointer;
`
export const ButtonSmall = styled.button`
text-align: center;
padding: 10px;
width: auto;
margin: 10px auto;
background-color: #330033;
color: #fff;
font-size: 18px;
font-weight: bold;
border: none;
border-radius: 2em;
cursor: pointer;
`
//home page styles

export const Card = styled.div`
width: 100%;
padding: 20px;
align-items: center;
display: flex;
flex-direction: column;
margin: 10px auto;
`
export const CardContent = styled.div`
width:50%;
align-items: center;
padding: 20px;

@media screen and (max-width:700px){
    width:100%;
}
`
export const CImage = styled.img`
width: 100%;
object-fit: cover;
`
export const CardHeader = styled.div`
width: 100%;
padding: 10px;
border: 1px solid rgba(0,0,0,.2);
align-items: center;
`
export const CardFooter = styled.div`
width: 100%;
padding: 10px;
align-items: center;
border: 1px solid rgba(0,0,0,.2);
`
export const CardRow = styled.div`
width:100%;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width:700px){
    flex-direction: column;
}
`
export const CardButton = styled.div`
color: inherit; 
padding: 10px;
cursor: pointer;
`
export const CardImage = styled.img`
width: 13em;
height: 10em;
`