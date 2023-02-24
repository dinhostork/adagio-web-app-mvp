import styled from "styled-components";

export const Browser = styled.div<{ open: boolean }>`
  width: 200px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  padding-left: 8px;
  padding-right: 8px;
  align-items: center;
  background: ${(props) =>
    props.open ? props.theme.colors.enffort : "transparent"};

  border-radius: 16px 16px 0px 0px;

  transition: background 1s;

  color: ${(props) => (props.open ? "white" : props.theme.colors.enffort)};
  svg {
    transition: all ease 1s;
    color: ${(props) => (props.open ? "white" : props.theme.colors.enffort)};
  }

  span {
    transition: all ease 1s;
  }

  &:hover {
    color: ${(props) => props.theme.colors.text};
    svg {
      color: ${(props) => props.theme.colors.text};
    }
    #browser-icon {
      transform: rotate(90deg);
    }
  }
`;
export const BrowserIconContainer = styled.div<{ rotate: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 1s;
  rotate: ${(props) => (props.rotate ? "180deg" : undefined)};
  color: ${(props) => (props.rotate ? "white" : props.theme.colors.enffort)};
`;

export const MenuContainer = styled.div<{ open: boolean }>`
  transition: height 0.5s;
  width: 200px;
  height: ${(props) => (props.open ? "200px" : 0)};
  background: ${(props) => props.theme.colors.enffort};
  position: absolute;
  border-radius: 0px 0px 16px 16px;
`;

export const Menu = styled.ul<{ open: boolean }>`
  @keyframes open {
    from {
      opacity: 0;
      color: red;
    }

    50% {
      opacity: 0.5;
    }

    to {
      color: white;
      opacity: 1;
    }
  }

  display: ${(props) => (props.open ? "display" : "none")};
  flex-direction: column;
  list-style: none;
  animation-duration: 3s;
  animation-name: open;
  animation-iteration-count: 1;
  color: white;
  padding-top: 32px;
`;
export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;
