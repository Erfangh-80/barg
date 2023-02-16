import styled from "styled-components"

type LabelProps = {
    color?: string;
}

export const Label = ({ color,  }: LabelProps) => {
    const Label = styled.label`
        font-size: 1rem;
    `
    
    return (
        <Label />
    )
}