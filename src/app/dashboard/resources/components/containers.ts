import styled from "styled-components";
import { shade } from "polished";

export const PageContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
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

export const TopbarContainer = styled.div`
  height: 80px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.enffort};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  justify-content: space-around;
`;

export const BrowserContainer = styled.div`
  width: auto;
  height: auto;
`;

export const SearchCointainer = styled.form`
  width: 234px;
  height: 32px;
  display: flex;
  display: flex;
  justify-content: space-around;
  color: ${(props) => props.theme.colors.enffort};
  transition: all 1s;
  background: transparent;
  &:focus-within {
    color: white;
  }
  input {
    transition: all 1s;
    background: transparent;
    padding-left: 8px;
    border: none;
    color: ${(props) => props.theme.colors.enffort};
  }
  input:focus {
    color: white;
  }
`;
