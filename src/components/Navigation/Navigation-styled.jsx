import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Header = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #454545;
`;

export const NavLink = styled(Link)`
  font-size: 17px;
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #ffa559;
  transition: color 300ms ease, scale 300ms ease;
  &.active {
    color: #ff6000;
  }
  &:hover,
  &:focus {
    color: #ff6000;
    scale: 1.1;
  }
`;

export const Nav = styled.nav`
  /* display: flex;
  justify-content: space-between; */
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
