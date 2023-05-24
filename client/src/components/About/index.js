import * as StyledAbout from '../../Styles/About.styled';
import Navbar from '../navbar';
import Footer from '../Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <StyledAbout.StyledAboutContainer
        bgImgUrl={'https://static.wixstatic.com/media/0ba375d130f247e1afe4ab96341919f7.jpg/v1/fill/w_1245,h_720,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/0ba375d130f247e1afe4ab96341919f7.jpg'}
      >
        <div>
          <h2>About Us</h2>
          <p>
             COMSATS University Islamabad, Sahiwal campus is situated half-way between Lahore and Multan on COMSATS Road off G.T Road Sahiwal,
             was formally inaugurated on September 23, 2006. 
             The campus is purpose built and is spread over area of 36 acres on land.We are offering a broad range of programs, especially in the areas of Management Sciences, Computer Science, Biosciences, Engineering and Humanities. 
          </p>
        </div>
      </StyledAbout.StyledAboutContainer>

      <StyledAbout.StyledAboutContainer
        bgImgUrl={'https://static.wixstatic.com/media/f2bb59155bbde1c6ba4a4c97f168bede.png/v1/fill/w_1068,h_566,fp_0.50_0.50,q_90,enc_auto/f2bb59155bbde1c6ba4a4c97f168bede.png'}
      >
        <div>
          <h2>Our Mission</h2>
          <p>
             CUI Sahiwal is committed to provide state of the art training and education to our students and prepare them for successful career in their respective fields. 
             Our mission is to encourage learning and promote research activities in order to facilitate our students to fulfill their aims and aspirations objectively.
          </p>
        </div>
      </StyledAbout.StyledAboutContainer>

      <StyledAbout.StyledAboutContainer
        bgImgUrl={'https://static.wixstatic.com/media/dcca985fe5e148b1aea6744afd6af686.jpg/v1/fill/w_1245,h_660,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/dcca985fe5e148b1aea6744afd6af686.jpg'}
      >
        <div>
          <h2>Our Values</h2>
          <p>
             We promoted values of mutual respect, personal integrity and coexistence contribute to the positive development of students’ character and transform them into responsible and helpful nationals. At COMSATS, we believe in fostering a creative and collaborative experience to help our students reach their full
             potential and pursue their dreams. Contact us to learn what we can do for you.
          </p>
        </div>
      </StyledAbout.StyledAboutContainer>
      <Footer />
    </>
  )
}

export default About;