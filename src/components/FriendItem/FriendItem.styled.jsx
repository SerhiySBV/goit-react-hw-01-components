import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  border: gray solid;
  border-radius: 10px;
  padding: 5px 15px;
  background-color: lightgray;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0;
`;

export const OnlineStatus = styled.span`
  border: 1px solid;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'chartreuse';
      case false:
        return 'red';
      default:
        return 'yellow';
    }
  }};
`;

export const Avatar = styled.img`
  border: 3px solid darkslategray;
  border-radius: inherit;
  background-color: grey;
`;

export const Name = styled.p`
  font-size: x-large;
  margin: 0;
  font-weight: 500;
`;
