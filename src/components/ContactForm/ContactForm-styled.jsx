import { Field as FormikField, Form as FormikForm } from 'formik';
import styled from 'styled-components';
import { IoMdCloseCircle } from 'react-icons/io';

export const IconCloseModal = styled(IoMdCloseCircle)`
  flex-shrink: 0;
  fill: #ffffff;
  transition: fill 300ms ease, scale 300ms ease;
  &:hover {
    fill: #454545;
    scale: 1.1;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

export const PlaceHolder = styled.span`
  font-size: 13px;
  position: absolute;
  padding: 5px;
  top: 5px;
  left: 1px;
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

export const Field = styled(FormikField)`
  /* width: 170px;
  height: 20px;
  margin-left: 5px;
  background-color: #d9d9d9;
  border: none;
  box-shadow: 0px 1px 0px rgb(0 0 0), 0px 1px 4px rgb(0 0 0 / 63%),
    0px 2px 3px rgb(0 0 0 / 42%);
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #5eb164;
  } */
  padding: 7px;
  height: 100%;
  width: 100%;
  background-color: transparent;
  transition: background-color 300ms ease;
  border-radius: 10px;
  outline: none;
  border: none;
  &:hover,
  &:focus,
  &:valid {
    color: #000000;
    background-color: #ff6000;
  }
  &:focus ~ ${PlaceHolder}, &:valid ~ ${PlaceHolder} {
    color: #000000;
    transform: translateY(-30px);
  }
  @media screen and (min-width: 768px) {
    &:focus ~ ${PlaceHolder}, &:valid ~ ${PlaceHolder} {
      color: #000000;
      transform: translateY(-35px);
    }
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 35px;
  background-color: #454545;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  border: none;
  box-shadow: 0px 1px 7px rgb(255 255 255 / 58%),
    0px 1px 8px rgb(76 76 76 / 67%), 0px 2px 3px rgb(0 0 0 / 47%);
  transition: background-color 300ms ease, scale 300ms ease, color 300ms ease;
  &:hover,
  &:focus {
    background-color: #ff6000;
    color: #000000;
    scale: 1.1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContainer = styled.div`
  width: 450px;
  height: 500px;
  border-radius: 15px;
  border: 5px solid white;
  display: flex;
  flex-direction: column;
  padding: 25px;
  /* background-color: white; */
  background: rgba(255, 255, 255, 0.12);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 30px;
  backdrop-filter: blur(32px);
  border-radius: 30px;
`;

export const WrapperCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25%;
`;

export const BtnCloseModal = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  /* &:focus ~ ${IconCloseModal},&:hover ~ ${IconCloseModal} {
    fill: #000000;
  } */
`;

export const BoxInput = styled.div`
  position: relative;
  height: 35px;
  background-color: white;
  min-width: 291px;
  border-radius: 10px;
  transition: background-color 300ms;
  @media screen and (max-width: 767px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 35px;
    margin-bottom: 30px;
  }
`;
