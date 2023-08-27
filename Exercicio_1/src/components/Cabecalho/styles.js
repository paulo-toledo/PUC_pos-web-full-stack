import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 100px;
  border-bottom: 1px solid #d9d9d9;  
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 100px;
  height: 40px;
  border: 1px solid #d9d9d9;  
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const InputSearch = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 18px;
`;

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: cyan;
`;