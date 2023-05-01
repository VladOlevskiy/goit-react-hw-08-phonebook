import styled from 'styled-components';

export const Section = styled.section`
  /* background-color: #ffa559; */
  padding-top: 50px;
  padding-bottom: 50px;
  background: #ff7e5f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #feb47b,
    #ff7e5f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #feb47b,
    #ff7e5f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const MainTitle = styled.h2`
  color: black;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;
`;

export const ButtonContactForm = styled.button`
  min-width: 130px;
  height: 40px;
  border-radius: 15px;
  border: none;
  background-color: #454545;
  color: white;
  transition: background-color 300ms ease, scale 300ms ease;
  &:hover,
  &:focus {
    background-color: #ff6000;
    scale: 1.1;
  }
`;
