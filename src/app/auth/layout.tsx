"use client";
import { GlobalStyle } from "@/app/global.styled";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { authTheme } from "../themes/auth.theme";

interface AuthLayoutProps {
  children: ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <ThemeProvider theme={authTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
}
