"use client";
import { ThemeContext, ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/global.styled";
import { LayoutPropsProtocol } from "../LayoutPropsProtocol";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { authTheme, defaultTheme, Theme } from "../themes";
import { getTheme, setTheme } from "@/services/theme.service";
const themes = [defaultTheme, authTheme, defaultTheme, authTheme];

export default function DashboardLayout({ children }: LayoutPropsProtocol) {
  

  
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
}
