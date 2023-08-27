import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  row-gap: 20px;
`;

export const ArticleBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const EmptBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 8/5;
  border: 1px solid #d9d9d9;
`;

export const Diagonal = styled.div`
  display: block;
  width: 2px;
  height: 100%;
  background-color: #d9d9d9;
  transform: skew(calc(${props => props.deg} * 0.70));  
`;

export const Article = styled.div`
  width: 70%;
  height: 200px;
  padding: 10px;
  border: 1px solid #d9d9d9;
`;