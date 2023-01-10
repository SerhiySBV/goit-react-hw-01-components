import styled from '@emotion/styled';

export const ProfileStyle = styled.div`
  margin: auto;
  width: 320px;
  text-align: center;
  border: gray solid;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Avatar = styled.img`
  margin: 25px 0;
  border: solid 2px lightgrey;
  border-radius: 50%;
  width: 100px;
`;
export const UserName = styled.p`
  font-size: xx-large;
  font-weight: 700;
  margin: 0 0 20px;
`;
export const Description = styled.p`
  margin: 0 0 6px;
  color: grey;
`;
export const SocialList = styled.ul`
  display: flex;
  list-style: none;
  padding: unset;
  font-size: 20px;
  font-weight: 500;
  margin: 40px 0 0;
  height: 75px;
  justify-content: space-evenly;
  background-color: lightgray;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;
export const Social = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const SocialCount = styled.span`
  color: whitesmoke;
`;
