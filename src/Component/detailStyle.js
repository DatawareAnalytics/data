import styled from 'styled-components'

export const Wrapper = styled.div`
width: 100%;
padding: 3em;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

@media screen and (max-width:600px){
    padding: 10px;
}
`
export const Content = styled.div`
width: 80%;
padding: 10px;

@media screen and (max-width:600px){
    width:100%;
    padding: 0px;
}
`
export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4,25%);
grid-gap: 10px;

@media screen and (max-width:700px) {
    grid-template-columns: repeat(2,50%);
}
`
export const Icon = styled.img`
padding: 10px;
width: 50%;
border-radius: 1em;

@media screen and (max-width:700px) {
    width: 70%;
}
`
export const IconWrapper = styled.div`
width: 100%;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
`
export const Text = styled.div`
font-size: 17px;
padding: 10px;
align-items: center;
`
export const ContactWrapper = styled.div`
width: 100%;
padding: 20px;
align-items: center;
display: flex;
flex-direction: column;
margin: 20px auto;
border-radius: 1em;

@media screen and (max-width:600px){
    padding: 0px;
}
`