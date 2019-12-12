import styled from 'styled-components';

export const Cart = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  box-sizing: border-box;
  height: 299px;
  width: 317px;
  border: 1px solid #e6e6e7;
  border-radius: 0 0 10px 10px;
  background-color: #ffffff;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.19);
  z-index: 1;
  overflow-y: auto;
  padding: 1.5rem;
`;

export const CartItems = styled.ul`
  list-style: none;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #eee;
  padding: 1rem 0;
`;

export const CartPaneLeft = styled.div``;

export const CartPaneRight = styled.div``;

export const CartItemTitle = styled.h5`
  color: #000000;
  font-family: Poppins;
  font-size: 23px;
  font-weight: 600;
  line-height: 33px;
`;

export const CartFigure = styled.figure`
  height: 92px;
  width: 95px;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const CartImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const CartButton = styled.button`
  height: 24px;
  width: 53px;
  color: #646a70;
  font-family: 'Open Sans';
  font-size: 13px;
  line-height: 24px;
  border: none;
  border-bottom: 0.1rem solid #eee;
  background-color: transparent;
`;

export const CartColors = styled.ul`
  list-style: none;

  display: flex;
`;

export const CartColor = styled.li`
  height: 32px;
  width: 32px;
  border-radius: 5px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#143061')};
  margin-right: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
