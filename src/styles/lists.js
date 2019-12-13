import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const ColorsList = styled(List)`
  display: flex;
`;

export const ColorItem = styled.li`
  height: ${({ height }) => (height ? height : '3.2rem')};
  width: ${({ width }) => (width ? width : '3.2rem')};
  border-radius: 5px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#143061')};
  margin-right: 1.2rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
