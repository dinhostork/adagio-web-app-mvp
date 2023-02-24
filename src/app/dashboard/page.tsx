"use client";
import { getTheme, setTheme } from "@/services/theme.service";
import Link from "next/link";
import { useState } from "react";
import { RiUserVoiceLine } from "react-icons/ri";
import { ThemeProvider } from "styled-components";
import { authTheme, defaultTheme, Theme } from "../themes";
import {
  PageContainer,
  SideBarContainer,
} from "./resources/components/Containers";
import {
  GroupTitle,
  Item,
  ItemsGroup,
  Sidebar,
} from "./resources/components/Sidebar";
import { MdOutlineArchive, MdOutlineGroups, MdOutlinePlace } from "react-icons/md";

export default function Dashboard() {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeProvider theme={defaultTheme}>
      <PageContainer>
        <SideBarContainer>
          <Sidebar show>
            <ItemsGroup>
              <Item>A</Item>
            </ItemsGroup>
            <ItemsGroup>
              <Item>
                <GroupTitle>Feeds</GroupTitle>
              </Item>
              <Item>
                <Link href={"/"}>
                  <RiUserVoiceLine />
                </Link>
              </Item>
              <Item>
                <Link href={"/"}>
                  <MdOutlineGroups />
                </Link>
              </Item>
              <Item>
                <Link href={"/"}>
                  <MdOutlineArchive />
                </Link>
              </Item>
              <Item>
                <Link href={"/"}>
                  <MdOutlinePlace />
                </Link>
              </Item>
            </ItemsGroup>

            <ItemsGroup>
              <Item>
                <GroupTitle>Feeds</GroupTitle>
              </Item>
              <Item>
                <Link href={"/"}>
                  <RiUserVoiceLine />
                </Link>
              </Item>
              <Item>
                <Link href={"/"}>
                  <MdOutlineGroups />
                </Link>
              </Item>
              <Item>
                <Link href={"/"}>
                  <MdOutlineArchive />
                </Link>
              </Item>
              <Item>
                <Link href={"/"}>
                  <MdOutlinePlace />
                </Link>
              </Item>
            </ItemsGroup>
          </Sidebar>
        </SideBarContainer>
      </PageContainer>
    </ThemeProvider>
  );
}
