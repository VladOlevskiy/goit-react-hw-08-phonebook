import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

export const UserNameText = styled.p`
  font-size: 17px;
  font-weight: 700;
  color: #ffe6c7;
  margin-right: 50px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  height: 30px;
  width: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffe6c7;
  transition: color 300ms ease, scale 300ms ease;
  &:hover,
  &:focus {
    background-color: #ffa559;
    scale: 1.1;
  }
`;
