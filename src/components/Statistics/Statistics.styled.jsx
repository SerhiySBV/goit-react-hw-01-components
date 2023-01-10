import styled from '@emotion/styled';

export const Statistic = styled.section`
  margin: 50px auto;
  width: 320px;
  text-align: center;
  border: gray solid;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const StatisticList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const StatistItem = styled.li`
  display: grid;
  outline: 2px solid darkgray;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: lightgray;
`;
