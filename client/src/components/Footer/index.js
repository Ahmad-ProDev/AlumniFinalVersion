import * as StyledFooter from '../../Styles/Footer.Styled';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <StyledFooter.StyledFooter>
      <StyledFooter.StyledFooterGrid>
        <StyledFooter.StyledFooterReachus>
          <h2>Reach Us At</h2>
          <p>COMSATS Road, Off GT Road<br />Sahiwal,Punjab<br />Pakistan</p>
        </StyledFooter.StyledFooterReachus>

        <StyledFooter.StyledFooterContactUs>
          <h2>Contact Us</h2>
          <StyledFooter.StyledFooterNumber>
            Tel: +92-040-4305001-4305002
          </StyledFooter.StyledFooterNumber>
          <StyledFooter.StyledFooterNumber>
            Fax: +92-040-4305006
          </StyledFooter.StyledFooterNumber>
          <StyledFooter.StyledFooterMail href='mailto:info@cuisahiwal.edu.pk'>
            info@cuisahiwal.edu.pk
          </StyledFooter.StyledFooterMail>
        </StyledFooter.StyledFooterContactUs>
      </StyledFooter.StyledFooterGrid>

            <br></br> <br></br>
      <div style={{fontSize: '2rem', fontWeight: 700, marginBottom: '2rem'}}>
          <h1>
              Follow Us
          </h1>    
      </div>
      <br></br>
      <div style={{color: '#162b6f'}}>
           (<SocialIcon url="https://www.facebook.com/cuiofficial/" target="_blank"/>);
           (<SocialIcon url="https://twitter.com/COMSATSOfficial" target="_blank"/>);
           (<SocialIcon url="https://www.instagram.com/comsats_sahiwal/" target="_blank"/>); 
      </div><br></br> 
         <hr></hr>

      <StyledFooter.StyledFooterCopyright>
        ©2022 by COMSATS Alumni
      </StyledFooter.StyledFooterCopyright>
    </StyledFooter.StyledFooter>
  )
}

export default Footer;