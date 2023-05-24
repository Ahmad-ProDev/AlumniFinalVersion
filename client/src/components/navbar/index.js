import {
  StyledNavbarHeader,
  StyledNavbar,
  StyledNavItem,
  StyledLogo1
} from "../../Styles/Navbar.Styled"


const Navbar = () => {
  return (
    <>
      <StyledNavbarHeader >
      <StyledLogo1 src="./images/comsatslogo.png" alt="Logo" />
      
        <h1>COMSATS Univeristy Islamabad </h1>
        <h1>Sahiwal Campus</h1>
      </StyledNavbarHeader>
      <StyledNavbar>
        <StyledNavItem to={'/'}><b>Home</b></StyledNavItem>
        <StyledNavItem to={'/gallery'}><b>Gallery</b></StyledNavItem>
        <StyledNavItem to={'/about'} ><b>About</b></StyledNavItem>
        <StyledNavItem to={'/contact'} ><b>Contact-Us</b></StyledNavItem>
      </StyledNavbar>
    </>

  )
}

export default Navbar;