import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledNavbarHeader = styled.div`
  background-color: #162b6f;
  text-align: center;
  padding: 3rem 0;
  font-family: 'Oswald',sans-serif;
  
  h1{
    font-weight: 900;
    font-size: 5rem;
    color: white;
  }
  &:after {
    content: '';
    clear: both;
    display: table;
  }
`;

export const StyledLogo1 = styled.img`
  /* Logo styles */
  float: left;
  width: 150px;
  height: 150px;
  margin: 0 16px;
`;

export const StyledNavbar = styled.nav`
  background-color: #fff;
  text-align: center;
  padding: 1rem 0;
`

export const StyledNavItem = styled(NavLink)`
  transition: all .5s;
  color: #162b6f;
  padding: 1rem 2rem;
  font-size: 2rem;

  &:link,&:visited{
    text-decoration: none;
  }

  &:hover{
    background-color: #162b6f;
    color: #fff;
  }
`;
