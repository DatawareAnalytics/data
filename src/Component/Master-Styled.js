import styled from 'styled-components'

export const Card = styled.div`
width: 100%;
padding: 10px;
align-items: center;
flex-direction: column;
margin: 10px auto;
`
export const CardRow = styled.div`
width: 100%;
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: ${({reverse})=>(reverse ? 'row-reverse':'row')};

@media screen and (max-width:700px){
    flex-direction: column;
}
`
export const CardContentBig = styled.div`
width: 100%;
flex-direction: column;
background-color: red;
`
export const Image = styled.img`
width: 30em;
object-fit: cover;
border-radius: 2em;
`
