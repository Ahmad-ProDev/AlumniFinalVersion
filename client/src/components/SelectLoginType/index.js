import Navbar from "../navbar";
import Footer from "../Footer";
import * as Styled from '../../Styles/SelectLoginType/SelectLoginType';
import { useState } from "react";
import Login from '../Login'

const SelectLoginType = () => {

  const [loginType, setLoginType] = useState(null);

  return (

    loginType ? <Login loginType={loginType} /> :
      <Styled.Section>
        <Navbar />
        <Styled.Container>
          <Styled.Heading>Select Login</Styled.Heading> <br></br> <br></br> <br></br>
          <Styled.ButtonContainer>
            <div>
              <Styled.Button onClick={() => setLoginType('AlumniSignup')}>Alumni<br />SignUp</Styled.Button> 
              <br></br> <br></br> 
              <Styled.Button onClick={() => setLoginType('HOD')}>HOD<br />Login</Styled.Button>
              <br></br> <br></br> 
            </div>
            <div >
              <Styled.Button onClick={() => setLoginType('AlumniLogin')}>Alumni<br />Login</Styled.Button>
              <br></br> <br></br> 
              <Styled.Button onClick={() => setLoginType('Admin')}>Admin<br />Login</Styled.Button>
              <br></br> <br></br> 
            </div>
            <div style={{ marginTop: '20px' }}>
             <Styled.Button onClick={() => setLoginType('Developer')}>Developer<br />Login</Styled.Button>
            </div>
          </Styled.ButtonContainer>
        </Styled.Container>
        <Footer />
      </Styled.Section>
  )
}

export default SelectLoginType;