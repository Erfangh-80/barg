import styled from "styled-components"

type Header = {
    fontSize?: string,
    padding?: string,
    
    children: string
}

const H1 = ({fontSize, padding, children}: Header) => {

    const FontSize = (fontSize && `font-size: ${fontSize}`)
    const Padding = (padding && `font-size: ${padding}`)

    const H1 = styled.h1`
        ${FontSize};
        ${Padding};
        margin-top: 2rem;
    `

    return (
        <H1>{children}</H1>
    )
}

export default H1;
