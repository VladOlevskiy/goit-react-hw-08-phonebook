import styled from 'styled-components';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  margin-left: 8px;
  width: 165px;
  height: 40px;
  background-color: #454545;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  border: none;
  box-shadow: 0px 1px 7px rgb(255 255 255 / 58%),
    0px 1px 8px rgb(76 76 76 / 67%), 0px 2px 3px rgb(0 0 0 / 47%);
  transition: background-color 300ms ease, scale 300ms ease;
  &:hover,
  &:focus {
    background-color: #ff6000;
    color: white;
    scale: 1.05;
  }
`;
export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const WrapperText = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0px;
  left: 0px;
  opacity: 0;
  padding: 15px;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 30px;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(101%);
  transition: transform 650ms ease;
`;
export const Item = styled.li`
  list-style: none;
  width: auto;
  padding: 10px;
  background-color: #ffe6c7;
  border-radius: 10px;
  border-bottom: 2px solid #454545;
  transition: all 450ms ease-in-out;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    scale: 0.94;
  }
  &:hover ${WrapperText},&:focus ${WrapperText} {
    opacity: 1;
    transform: translateY(0);
  }
  @media screen and (max-width: 767px) {
    &:not(last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const Img = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 767px) {
    max-height: 500px;
  }
  @media screen and (min-width: 768px) {
    max-height: 350px;
  }
`;

export const WrapperImg = styled.div`
  position: relative;
  overflow: hidden;
  /* border-top-left-radius: 10px;
  border-top-right-radius: 10px; */
  /* border-bottom: none; */
`;

export const Name = styled.p`
  font-size: 18px;
  color: black;
`;

export const LinkTel = styled.a`
  display: block;
  color: #000000;
  font-size: 18px;
  text-align: center;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #ff6000;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;
export const IconPhone = styled(BsFillTelephoneForwardFill)`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    width: 15px;
    height: 15px;
  }
  @media screen and (min-width: 1280px) {
    width: 18px;
    height: 18px;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  color: black;
  margin-right: 20px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  width: 100%;
`;
