import styled from "styled-components" 
import H1 from "../../atoms/H1/H1"
import P from "../../atoms/Paragraph/Paragraph"
import { CloseIcon } from "../../atoms/icon/CloseIcon"
import { Button } from "../../atoms/button/Botton"

export const PopUpRed = () => {
    
    const Box = styled.div`
        width: 500px;
        box-shadow: 0px 4px 4px 6px rgba(143, 143, 143, 0.25);
        border-radius: 10px;
        border-top: 10px solid #FD2E2E;
        text-align: center;
        position: relative;
        h1{
            padding: 50px 72px;
            font-weight: 500;
            font-size: 32px;
        }
        p{
            padding: 0px 73px ;
            padding-bottom: 2rem;
        }
    `
    const Div = styled.div`
        border-radius: 50%;
        border: 10px solid #F1F1F1;
        text-align: center;
        position: absolute;
        top: -65px;
        left: 200px;
    `

    const Div2 = styled.div`
        display: flex;
        justify-content: space-around;
        width: 100%;
        border-top: 1px solid #939393;
        padding-top: 2rem;
        padding-bottom: 2rem;
    `

    return (
        <Box>
            <Div>
                <CloseIcon />
            </Div>
            <H1>رد نهایی</H1>
            <P text="شما در حال رد نهایی درخواست هستید. آیا مطمين هستید؟"/>
            <Div2>
                <Button text="انصراف" background="#fff" color="#000" padding="3px 72px" />
                <Button text="رد نهایی" background='#FD2E2E' backgroundHover='#137160' color="#fff" padding="3px 72px" />
            </Div2>
        </Box>
    )
}


