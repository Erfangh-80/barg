import styled from "styled-components"

type InputProps = {
    width?: string;
    padding?: string;
    placeholder?: string
    borderColor?: string
    Margin?: string
}

export const Input = ({width, padding, placeholder, borderColor, Margin}: InputProps) => {
    
    const Width = (width && `width: ${width}`);
    const Padding = (padding && `padding: ${padding}`);
    const BorderColor = (borderColor && `border: 1px solid ${borderColor}`);
    const margin = (Margin && `margin: ${Margin}`);

    const Input = styled.input`
        ${Width};
        ${Padding};
        ${BorderColor};
        ${margin};
        border-radius: 25px;
        text-align: right;
    `
    
    return(
        <Input type={"text"} placeholder={placeholder}/>
    )
}

