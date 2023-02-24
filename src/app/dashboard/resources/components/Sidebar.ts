import styled from "styled-components";

export const Sidebar = styled.aside<{ show: boolean }>`
  width: 92px;
  height: 100%;
  display: ${(props) => (props.show ? "flex" : "none")};

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  color: ${(props) => props.theme.colors.text};
`;

export const ItemsGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;
export const Item = styled.li`
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.colors.enffort};
    transition: all 2s;
  }

  svg:hover{
    color: ${(props) => props.theme.colors.text};

  }
  
`;

export const GroupTitle = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.colors.enffort};
`;

