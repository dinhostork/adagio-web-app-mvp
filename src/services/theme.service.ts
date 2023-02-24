"use client";
import { defaultTheme, Theme } from "@/app/themes";

export function setTheme(theme: Theme): void {
  localStorage.setItem("adagio-theme", JSON.stringify(theme));
}

export function getTheme(): Theme {
  const themeString = localStorage.getItem("adagio-theme");
  if (!themeString) {
    setTheme(defaultTheme);
    return defaultTheme;
  }

  const theme: Theme = JSON.parse(themeString);
  return theme;
}
