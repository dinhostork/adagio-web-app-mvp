import styled from "styled-components";

export const FriendsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  align-items: center;
`;

export const RollMoreButton = styled.button`
  margin-top: 8px;
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  border: none;
  display: block;
  justify-content: center;
  align-items: center;
  transition: color 0.5s;

  svg {
    color: ${(props) => props.theme.colors.enffort};
    width: 10px;
    height: 10px;
    transition: color 0.5s;
  }

  &:hover svg {
    color: ${(props) => props.theme.colors.text};
    transition: color 0.5s;
  }
`;

export const FriendsSlider = styled.div`
  overflow-y: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  max-height: 25vh;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Friend = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-bottom: 16px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const FriendPic = styled.img`
  width: 32px;
  height: 32px;
  background: blue;
  border-radius: 50%;
`;
