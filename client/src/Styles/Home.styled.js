import styled from "styled-components";

export const StyledHomeHeader = styled.div`
  min-height: 60vh;
  background-image: url('./images/Main.jpeg');
  background-size: cover;
  background-color: #162b6f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHomeHeaderContainer = styled.div`
  background-color: rgba(255, 255, 255, .4);
  text-align: center;
  width: 60rem;
  padding: 8rem;

  h2{
    color: black; 
    text-transform: uppercase;
    font-weight: 900;
    font-size: 5rem;
    font-family: 'Oswald',sans-serif;
  }

  p{

    background-color: rgba(255, 255, 255, .4);
    font-size: 1.8rem;
    color: black; 
    margin: 2rem 0 5rem 0;
  }

`;

export const StyledHomeAbout = styled.div`
  /* display: flex;
  align-items:center;
  justify-content: center; */
  background-color: #2243ae;
  padding: 5rem;
`

export const StyledHomeAboutContainer = styled.div`
  background-color: #162b6f;
  display: flex;
  justify-content: space-between;
  height: 30rem;
`

export const StyledHomeAboutContent = styled.div`
    flex-grow: 1;
  padding: 3rem 3rem;
  display: flex;
  font-family: 'Oswald',sans-serif;
  flex-direction: column;
  justify-content: space-between;

  h2{
    font-family: 'Oswald',sans-serif;
    font-size: 5.6rem;
  }

  h3{
    font-family: 'Oswald',sans-serif;
    font-size: 3rem;
  }

  p{
    font-size: 1.8rem;
    margin-bottom: 3rem;
    font-weight: 400;
  }

  div{
    margin-bottom: 2rem;
  }
`

export const StyledHomeExplore = styled.div`
  background-color: #142e84;
  display: flex;
  height: 30rem;
`

export const StyledHomeExploreImg = styled.div`
  background-image: url('./images/22.jpeg');
  background-size: cover;
  flex: 1 1 50%;
`

export const StyledHomeExploreText = styled.div`
  flex: 1 1 50%;
  padding: 3rem 6rem;
  font-family: 'Oswald',sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2{
    font-size: 5.5rem;
    line-height: 1.3;
    margin-top: 2rem;
  }
  h3{
    font-size: 3rem;
    font-weight: 300;
  }
  p{
    font-size: 1.8rem;
    text-align: justify;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`

export const StyledHomeAlumniNumbers = styled.div`
  background-color: #2243ae;
  padding: 2rem 0 3rem 0;
  font-family: 'Oswald',sans-serif;
  height: 25rem;
  h2{
    text-align: center;
    font-size: 4rem;
  }
`

export const StyledHomeAlumniNumbersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2.5rem;
`

export const StyledHomeAlumniNumbersBlock = styled.div`
  text-align: center;
  font-family: 'Oswald',sans-serif;
  h3{
    font-size: 6rem;
    line-height: 1.1;
  }

  p{
    font-size: 2rem;
    font-weight: 300;
  }
`

export const StyledHomeEvents = styled.div`
  background-color: #162b6f;
  padding: 5rem 0;
  h2{
    font-family: 'Oswald',sans-serif;
    text-align: center;
    font-size: 6rem;
  }
`

export const StyledHomeEventsContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2,65rem);
  justify-content: center;
  align-items: center;
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export const StyledHomeEventsBlock = styled.div`
  background-color: #2243ae;
  display: flex;
  width: 65rem;
  height: 20rem;

  img{
    width: 50%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    flex: 1 1 50%;
  }
`;

export const StyledHomeEventDescription = styled.div`
  flex: 1 1 50%;
  padding: 3rem 2rem;
`;


export const StyledHomeEventInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  h3{
    font-size: 3rem;
  }

  div{
    font-size: 1.8rem;
    font-weight: 300;
    
  }

  span{
    p{
      display: flex;
      align-items: center;
      font-size: 1.8rem;
      font-weight: 300;

      &:not(:last-child){
        margin-bottom: 2px;
      }
    

      span{
        margin-left: .6rem;
      }
    }
  }

  
`;
