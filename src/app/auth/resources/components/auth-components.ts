import { authTheme as theme } from "@/app/themes";
import styled from "styled-components";

export const AuthPageContainer = styled.main`
  width: 100%;
  height: 100%;
  background: ${theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.text};
`;

export const H2 = styled.h2`
  color: ${theme.colors.main};
  font-weight: 1000;
  font-size: 25px;
`;

export const H3 = styled.h3`
  color: ${theme.colors.main};
  font-weight: 1000;
  font-size: 16px;
`;

export const PageContent = styled.div`
  width: 95%;
  height: 91.05%;
  background: ${theme.colors.main};
  border: none;
  border-radius: 48px;
  padding: 15px 38px 15px 38px;
`;

export const TopContainer = styled.menu`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    & {
      display: none;
    }
  }
`;

export const MenuItens = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    & {
      display: none;
    }
  }
`;

export const MenuItem = styled.li`
  text-decoration: none;
  float: left;
  font-weight: normal;
  margin-right: 24px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: ${theme.colors.secundary};
  }
`;

export const Logo = styled.div`
  max-width: 100px;
  font-size: 16px;
  font-weight: bolder;
`;

export const ButtonPrimary = styled.button`
  background: ${theme.colors.primary};
  width: auto;
  height: 40px;
  text-align: center;
  color: ${theme.colors.text};
  padding: 8px;
  border: none;
  font-weight: 900;
  border-radius: 8px;
  transition: 0.5s ease;
  &:hover {
    transition: 0.5s ease;
    background: ${theme.colors.background};
    color: ${theme.colors.primary};
  }
`;

export const BottomShape = styled.div`
  background: url(${"/resources/auth-bottom-shape.svg"});
  width: 500px;
  height: 137px;
  position: relative;
  bottom: 38px;
  left: -38px;
  align-items: center;
  padding: 0 15px 0 15px;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  @media screen and (max-width: 1000px) {
    & {
      display: none;
    }
  }
`;

export const StaffImgContainer = styled.div`
  width: 72px;
  height: 72px;
  border: 2px solid transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: infinite 0.3s;
  transition: all 0.5s ease;
  &:hover {
    transition: all 0.5s ease;
    border: 2px solid ${theme.colors.primary};
  }
`;

export const StaffImg = styled.img`
  width: 64px;
  height: 64px;
  border: 2px solid ${theme.colors.main};
  border-radius: 50%;
`;

export const TextSideShape = styled.div`
  margin-left: 16px;
  height: 64px;
  max-width: auto;
`;

export const TextSideShapeTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  span {
    color: ${theme.colors.secundary};
    margin-left: 16px;
  }
`;

export const TextSideShapeMainText = styled.div`
  margin-top: 4px;
  color: ${theme.colors.enffort};
  max-width: 182px;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 32px;
  overflow: hidden;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    & {
      margin-top: 0;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

export const HeroImage = styled.div`
  width: 500px;
  height: 600px;
  margin-left: 32px;
  background: url("/resources/musician.svg");
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  background-position: bottom;
  top: -100px;
  left: 100px;
  @media screen and (max-height: 500px) {
    & {
      display: none;
    }
  }
`;

export const BtnContainer = styled.div`
  min-width: 110px;
  height: 32px;
  margin-top: 32px;
`;

export const Button = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  background: ${theme.colors.primary};
  color: ${theme.colors.text};
  padding: 8px;
  border: none;
  font-weight: 900;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
  cursor: pointer;
  &:hover {
    transition: 0.5s ease;
    background: ${theme.colors.main};
    color: ${theme.colors.text};
  }
`;
export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: 1000px) {
    & {
      justify-content: center;
    }
  }
`;

export const AuthBoxContainer = styled.div`
  width: 400px;
  flex-direction: column;
  height: 400px;
  border-radius: 16px;
  background: ${theme.colors.background};
  padding: 32px 32px 0 32px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    & {
      background: ${theme.colors.mobBgColor};
    }
  }
`;

export const AuthBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthBoxHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: ${theme.colors.enffort};
    margin-top: 8px;
    font-size: 12px;
  }
`;
export const InputGroup = styled.div`
  position: relative;
  margin-top: 16px;
  svg {
    height: 1.5rem;
    width: 1.5rem;
    padding: 4px;
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    color: ${theme.colors.secundary};
    transition: all 1s ease;
  }
  span {
    position: relative;
  }
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 38px;
  border-radius: 10px;
  border: 1.6px solid ${theme.colors.secundary};
  padding: 4px 8px 4px 8px;
  transition: all 1s ease;
  &:focus {
    border: 1.6px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    transition: all 1s ease;
  }
  &:invalid {
    border: 1.6px solid #ff6d91;
    color: #ff6d91;
    transition: all 1s ease;
  }
  &:invalid + svg {
    color: #ff6d91;
    transition: all 1s ease;
  }
  
  &:focus + svg {
    color: ${theme.colors.primary};
    transition: all 1s ease;
  }
`;
export const RecoverLink = styled.div`
  color: ${theme.colors.primary};
  font-size: 12px;
  text-align: right;
  margin-top: 8px;
  margin-right: 4px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
`;

export const BottomInfo = styled.div`
  position: relative;
  bottom: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
    transition: all 1s ease;
  span {
    margin-top: 8px;
    color: ${theme.colors.enffort};
    font-size: 14px;
  }
  a {
    color: ${theme.colors.primary};
    font-weight: 400;
    transition: all 1s ease;
  }
  a:hover{
    color: ${theme.colors.main};
    transition: all 1s ease;
  }
`;

export const Line = styled.div`
  width: 400px;
  height: 0.3pt;
  border-top: solid 0.3pt ${theme.colors.enffort};
`;