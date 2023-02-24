import styled from "styled-components";
import { shade } from "polished";

export const PageContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
`;

export const SideBarContainer = styled.div`
  width: fit-content;
  height: 100%;
  border-right: 1px ${(props) => props.theme.colors.enffort} solid;
`;

export const ThemeIconContainer = styled.div`
  width: fit-content;
  height: auto;

  svg {
    color: ${(props) => shade(0.1, props.theme.colors.text)};
    cursor: pointer;
  }
`;

export const DarkIconContainer = styled.div`
  &:hover::before {
    content: "Mudar para o tema light";
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => shade(0.1, props.theme.colors.enffort)};
    width: 200px;
    height: 25px;
    position: absolute;
    bottom: 40px;
    left: 92px;
    opacity: 0.8;
  }
`;

export const LightIconContainer = styled.div`
  &:hover::before {
    content: "Mudar para o tema dark";
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => shade(0.1, props.theme.colors.enffort)};
    width: 200px;
    height: 25px;
    position: absolute;
    bottom: 40px;
    left: 92px;
    opacity: 0.8;
  }
`;
