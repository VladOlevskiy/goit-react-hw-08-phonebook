import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';
import { ImSearch } from 'react-icons/im';

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  align-items: center;
`;

export const SearchIcon = styled(ImSearch)`
  margin-left: 10px;
  margin-right: 10px;
  position: absolute;
  top: 10px;
`;

export const BoxInput = styled.div`
  position: relative;
  height: 35px;
  background-color: transparent;
  width: 600px;
  border-radius: 10px;
  transition: background-color 300ms;
  @media screen and (max-width: 767px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 768px) {
    width: 600px;
    height: 35px;
    margin-bottom: 30px;
  }
`;
export const PlaceHolder = styled.span`
  font-size: 13px;
  position: absolute;
  padding: 5px;
  top: 5px;
  left: 25px;
  display: inline-block;
  color: #000000;
  pointer-events: none;
  transition: transform 300ms, color 300ms;
  @media screen and (min-width: 1280px) {
    top: -3px;
    font-size: 16px;
    padding: 10px;
  }
`;
export const Input = styled(DebounceInput)`
  padding: 7px;
  padding-left: 30px;
  height: 100%;
  width: 100%;
  background-color: #e6e6e65c;
  transition: background-color 300ms ease;
  border-radius: 15px;
  outline: none;
  border: none;
  border-bottom: 3px solid #454545;
  border-top: 1px solid #454545;
  &:hover,
  &:focus {
    color: #000000;
    background-color: #e6e6e6a9;
  }
  &:focus ~ ${PlaceHolder}, &:hover ~ ${PlaceHolder} {
    color: #000000;
    transform: translateY(-30px);
  }
  @media screen and (min-width: 768px) {
    &:focus ~ ${PlaceHolder},&:hover ~ ${PlaceHolder} {
      color: #000000;
      /* transform: translateY(-35px); */
    }
  }
`;
