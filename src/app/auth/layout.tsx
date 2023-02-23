"use client";
import { GlobalStyle } from "@/app/global.styled";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { LayoutPropsProtocol } from "../LayoutPropsProtocol";
import { authTheme } from "../themes/auth.theme";
import {
  AuthPageContainer,
  BottomShape,
  ButtonPrimary,
  H3,
  HeroImage,
  Logo,
  Main,
  MainContent,
  MenuItem,
  MenuItens,
  PageContent,
  StaffImg,
  StaffImgContainer,
  TextSideShape,
  TextSideShapeMainText,
  TextSideShapeTopContainer,
  TopContainer,
} from "./resources/components/auth-components";


export default function AuthLayout({ children }: LayoutPropsProtocol) {
  const path = usePathname();

  return (
    <>
      <ThemeProvider theme={authTheme}>
        <GlobalStyle />
        <AuthPageContainer>
          <PageContent>
            <TopContainer>
              <Logo>
                <span>ADAGIO</span>
              </Logo>
              <MenuItens>
                <MenuItem>
                  <Link href={"/about"}>Sobre</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/dev"}>Desenvolvedores</Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href={
                      path == "/auth/login" ? "/auth/register" : "/auth/login"
                    }
                  >
                    <ButtonPrimary>
                      {path == "/auth/login" ? "Criar conta" : "Login"}
                    </ButtonPrimary>
                  </Link>
                </MenuItem>
              </MenuItens>
            </TopContainer>
            <MainContent>
            <Main>
              <HeroImage />

              { children }
            </Main>
            <BottomShape>
              <StaffImgContainer>
                <StaffImg src={'https://i.pravatar.cc/300'} alt="staff-img" />
              </StaffImgContainer>

              <TextSideShape>
                <TextSideShapeTopContainer>
                  <H3>Dinho Stork</H3>
                  <span>8 min atrás</span>
                </TextSideShapeTopContainer>

                <TextSideShapeMainText>
                  <span>hshfashfahsfhasfhasfhashfashfhasf</span>
                </TextSideShapeMainText>
              </TextSideShape>
            </BottomShape>
          </MainContent>
          </PageContent>
        </AuthPageContainer>
      </ThemeProvider>
    </>
  );
}
