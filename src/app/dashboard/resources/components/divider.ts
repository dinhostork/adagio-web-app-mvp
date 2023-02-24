import styled from "styled-components";

export const Divider = styled.line`
    height: 0.01px;
    width: 100%;
    border-top: solid 1px ${props => props.theme.colors.enffort};
    margin-bottom: 24px;
`