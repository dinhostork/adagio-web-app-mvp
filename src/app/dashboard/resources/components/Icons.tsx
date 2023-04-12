import {
  IconContainer,
  IconsContainer,
  ItemCountContainer,
} from "./containers";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { RiMessage2Line } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import React from "react";
import { MenuIconContainer } from "./containers";
import { useState } from "react";
import ReactDOM from "react-dom";

function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) {
  React.useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener as any);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener as any);
    };
  }, [ref, handler]);
}

export default class IconsComponent extends React.Component {
  state = {
    friendRequest: 100,
    messages: 16,
    notifications: 20,
    requestsOpen: false,
    messagesOpen: false,
    notificationsOpen: false,
    createMenuOpen: false,
    friendsMenuOpen: false,
    messagesMenuOpen: false,
    notificationsMenuOpen: false,
  };

  showBlock(condition1: number, oppened: boolean) {
    return (condition1 > 0 && !oppened).toString();
  }

  formatNumber(number: number) {
    if (number > 99) {
      return "+99";
    }

    return number;
  }

  togleMenu(menu: boolean) {
    return !menu;
  }
  openClosesMenu(i: object, closeMenu: boolean = true) {
    let obj = {};
    const objKey = Object.keys(i)[0];
    const objValue = Object.values(i)[0];
    const allStatekeys = Object.keys(this.state).filter((key) => {
      const re = /Menu/;
      return re.exec(key);
    });

    if (objKey) {
      allStatekeys.forEach((key) => {
        if (key === objKey) {
          obj = {
            ...obj,
            [`${key}`]: objValue,
          };
        } else if (closeMenu) {
          obj = {
            ...obj,
            [`${key}`]: false,
          };
        }
      });
    }

    this.setState({
      ...this.state,
      ...obj,
    });
  }

  private wrapperRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event: MouseEvent) => {
    const wrapper = this.wrapperRef.current;

    if (wrapper && !wrapper.contains(event.target as Node)) {
      this.setState({
        requestsOpen: false,
        messagesOpen: false,
        notificationsOpen: false,
        createMenuOpen: false,
        friendsMenuOpen: false,
        messagesMenuOpen: false,
        notificationsMenuOpen: false,
      });
    }
  };

  render() {
    {
    }
    return (
      <IconsContainer ref={this.wrapperRef}>
        <IconContainer
          onClick={() =>
            this.openClosesMenu({
              createMenuOpen: !this.state.createMenuOpen,
            })
          }
        >
          <MenuIconContainer show={this.state.createMenuOpen.toString()}>
            <li onClick={(e) => e.stopPropagation()}>Post</li>
            <li onClick={(e) => e.stopPropagation()}>Story</li>
            <li onClick={(e) => e.stopPropagation()}>Room</li>
          </MenuIconContainer>
          <AiOutlinePlusSquare />
        </IconContainer>
        <IconContainer
          onClick={() =>
            this.openClosesMenu({
              friendsMenuOpen: !this.state.friendsMenuOpen,
            })
          }
        >
          <MenuIconContainer show={this.state.friendsMenuOpen.toString()}>
            fff
          </MenuIconContainer>
          <ItemCountContainer
            display={this.showBlock(
              this.state.friendRequest,
              this.state.requestsOpen
            )}
          >
            {this.formatNumber(this.state.friendRequest)}
          </ItemCountContainer>
          <HiOutlineUsers />
        </IconContainer>
        <IconContainer>
          <ItemCountContainer
            display={this.showBlock(
              this.state.messages,
              this.state.messagesOpen
            )}
          >
            {this.formatNumber(this.state.messages)}
          </ItemCountContainer>
          <RiMessage2Line />
        </IconContainer>
        <IconContainer>
          <ItemCountContainer
            display={this.showBlock(
              this.state.notifications,
              this.state.notificationsOpen
            )}
          >
            {this.formatNumber(this.state.notifications)}
          </ItemCountContainer>
          <FiBell />
        </IconContainer>
      </IconsContainer>
    );
  }
}
