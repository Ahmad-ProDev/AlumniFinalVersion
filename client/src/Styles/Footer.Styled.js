import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: #162b6f;
  color: #fff;
  border-top: 1px solid #000;
  padding: 2rem 0;
  text-align: center;
`;

export const StyledFooterMail = styled.a`
  &:link,&:visited{
    text-decoration: none;
    color: #fff;
    font-size: 1.7rem;
  }

  &:hover{
    text-decoration: underline;
  }
`;


export const StyledFooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  
`;

export const StyledFooterReachus = styled.div`

  h2{
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  p{
    font-size: 2rem;
  }
`;

export const StyledFooterCopyright = styled.div`
  font-size: 2rem;
  margin-top: 4rem;
  h3{
    font-size: 3rem;
  }

  div{
    font-size: 1.8rem;
    font-weight: 300;
    margin: 2rem 0;
  }

  p{
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 300;
    margin-top: 1rem;

    span{
      margin-left: .6rem;
    }
  }
`;


export const StyledFooterContactUs = styled.div`
h2{
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;

export const StyledFooterNumber = styled.p`
font-size: 2rem;
`;

export const StyledFooterSocials = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  gap: 1rem;

  a{
    
    padding: 1.5rem;
    border-radius: 100%;
    cursor: pointer;
    

    svg{
      width: 2rem;
      height: 2rem;
    }
  }
`;

