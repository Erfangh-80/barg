import styled from "styled-components" 
import H1 from "../../atoms/H1/H1"
import P from "../../atoms/Paragraph/Paragraph"
import { ConfirmIcon } from "../../atoms/icon/ConfirmedIcon"
import { ConfirmedlgIcon } from "../../atoms/icon/ConfirmedlgIcon"

import { ButtonFilter } from "../../molecules/ButtonIcon/ButtonFilter"
import { Button } from "../../atoms/button/Botton"

const PopUpGreen = () => {
    
    const Box = styled.div`
        width: 500px;
        box-shadow: 0px 4px 4px 6px rgba(143, 143, 143, 0.25);
        border-radius: 10px;
        border-top: 10px solid #38C621;
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
        background-color: #f1f1f1;
    `

    return (
        <Box>
            <Div>
                <ConfirmedlgIcon />
            </Div>
            <H1>تایید نهایی</H1>
            <P text="شما درحال تایید و امضای روکش این سند هستید لطفا دقت کنید."/>
            <Div2>
                <Button text="انصراف" background="#fff" color="#000" padding="3px 72px" />
                <Button text="تایید نهایی" background='#38C621' backgroundHover='#137160' color="#fff" padding="3px 72px" />
            </Div2>
        </Box>
    )
}

export { PopUpGreen }
