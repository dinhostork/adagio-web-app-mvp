import styled from "styled-components";

export const PageContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
`;

export const SideBarContainer = styled.div`
  width: fit-content;
  height: 100%;
  border-right: 1px ${props => props.theme.colors.enffort} solid;
`;

