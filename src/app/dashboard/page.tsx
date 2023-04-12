"use client";
import { getTheme, setTheme } from "@/services/theme.service";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiUserVoiceLine } from "react-icons/ri";
import { ThemeProvider } from "styled-components";
import { authTheme, defaultTheme, Theme } from "../themes";
import {
  DarkIconContainer,
  LightIconContainer,
  PageContainer,
  SideBarContainer,
  ThemeIconContainer,
  TopbarContainer,
} from "./resources/components/containers";
import {
  GroupTitle,
  Item,
  ItemsGroup,
  Sidebar,
} from "./resources/components/Sidebar";
import {
  MdOutlineArchive,
  MdOutlineDarkMode,
  MdOutlineGroups,
  MdOutlineKeyboardArrowDown,
  MdOutlinePlace,
  MdOutlineWbSunny,
} from "react-icons/md";
import { Divider } from "./resources/components/divider";
import {
  Friend,
  FriendPic,
  FriendsContainer,
  FriendsSlider,
  RollMoreButton,
} from "./resources/components/friends";
import { IoIosArrowDown } from "react-icons/io";
import BrowserComponent from "./resources/components/Browser";
import SearchComponent from "./resources/components/Search";
import IconsComponent from "./resources/components/Icons";

export default function Dashboard() {
  const [theme, setLocalTheme] = useState(defaultTheme);

  useEffect(() => {
    setLocalTheme(getTheme());
  }, []);

  const togleTheme = (theme: Theme) => {
    setTheme(theme);
    setLocalTheme(theme);
  };
  const scrollFriendsBar = () => {
    const bar = document.getElementById("friends-carousel");
    if (bar) {
      bar.scrollTop += 50;
    }
  };
  return (
    <ThemeProvider theme={theme}>
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

            <Divider />
            <ItemsGroup>
              <Item>
                <GroupTitle>Amigos</GroupTitle>
              </Item>
              <FriendsContainer>
                <FriendsSlider id="friends-carousel">
                  <Friend>
                    <FriendPic src={"https://i.pravatar.cc/301"} alt="friend" />
                  </Friend>
                  <Friend>
                    <FriendPic src={"https://i.pravatar.cc/302"} alt="friend" />
                  </Friend>
                  <Friend>
                    <FriendPic src={"https://i.pravatar.cc/303"} alt="friend" />
                  </Friend>
                  <Friend>
                    <FriendPic src={"https://i.pravatar.cc/304"} alt="friend" />
                  </Friend>
                  <Friend>
                    <FriendPic src={"https://i.pravatar.cc/305"} alt="friend" />
                  </Friend>
                  <Friend>
                    <FriendPic src={"https://i.pravatar.cc/306"} alt="friend" />
                  </Friend>
                  <Friend>
                    <FriendPic src={"https://i.pravatar.cc/307"} alt="friend" />
                  </Friend>
                </FriendsSlider>
                <RollMoreButton onClick={(e) => scrollFriendsBar()}>
                  <IoIosArrowDown />
                </RollMoreButton>
              </FriendsContainer>
            </ItemsGroup>
            <ItemsGroup>
              <Item>
                <ThemeIconContainer
                  onClick={() =>
                    togleTheme(theme.title == "dark" ? authTheme : defaultTheme)
                  }
                >
                  {theme.title == "dark" ? (
                    <DarkIconContainer>
                      <MdOutlineDarkMode />
                    </DarkIconContainer>
                  ) : (
                    <LightIconContainer>
                      <MdOutlineWbSunny />
                    </LightIconContainer>
                  )}
                </ThemeIconContainer>
              </Item>
            </ItemsGroup>
          </Sidebar>
        </SideBarContainer>
        <TopbarContainer>
          <BrowserComponent />
          <SearchComponent />
          <IconsComponent />
        </TopbarContainer>
      </PageContainer>
    </ThemeProvider>
  );
}
