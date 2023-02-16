import styled from "styled-components";

type ParagraphProps = {
    text: string;
    color?: string;
    padding?: string;
}

const Paragraph = ({text, color, padding}: ParagraphProps) => {

    const Color = (color && `color: ${color}`)
    const Padding = (padding && `padding: ${padding}`)

    const P = styled.p`
        ${Color};
        ${Padding};
    `

    return (
        <P>{text}</P>
    )
}

export default Paragraph
