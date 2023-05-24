import * as StyledComponents from '../../Styles/Home.styled';
import { StyledButtonYellow } from "../../Styles/Button.styled";
import { StyledButtonYellow1 } from '../../Styles/ButtonExternalLink';
import axios from 'axios';
import { ImLocation2, ImCalendar } from 'react-icons/im'
import { useEffect, useState } from 'react';
import useLoading from '../../hooks/useLoading';
import Navbar from '../navbar';
import Footer from '../Footer';

const Home = () => {

  const [statsInfo, setStatsInfo] = useState({
    passedOut: 0,
    employed: 0,
    governmentEmployees: 0,
    seniorManagement: 0
  });
  const [events, setEvents] = useState(null);
  const setGlobalLoading = useLoading();

  useEffect(() => {

    if (statsInfo.passedOut === 0) {
      (async () => {
        try {
          setGlobalLoading(true);
          const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERV}/api/getstats`);
          const events = await axios.get(`${process.env.REACT_APP_BACKEND_SERV}/img/getevents`);

          if (res.data) {
            setStatsInfo(res.data);
          }

          if (events.data) {
            setEvents(events.data)
          }

          setGlobalLoading(false);
        } catch (err) {
          console.log(err);
          setGlobalLoading(false);
        }
      })();

    }




  }, [setGlobalLoading, statsInfo])

  return (
    <>
      <Navbar />
      <StyledComponents.StyledHomeHeader>
        <StyledComponents.StyledHomeHeaderContainer>
          <h2>Welcome</h2>
          <p>
          Welcome Back! We are glad to have you here and look forward to staying connected with you
          </p>
          <StyledButtonYellow to={'/login'}>Log In</StyledButtonYellow>
        </StyledComponents.StyledHomeHeaderContainer>
      </StyledComponents.StyledHomeHeader>
      <StyledComponents.StyledHomeAbout>
        <StyledComponents.StyledHomeAboutContainer>
          <StyledComponents.StyledHomeAboutContent>
            <div>
              <h2>COMSATS Sahiwal</h2>
            </div>
            <p>
            CUI Sahiwal is a campus of the COMSATS University Islamabad (CUI) located in Sahiwal, Punjab, Pakistan. It was established in 2006 and offers undergraduate and graduate programs in a variety of fields, including engineering, computer science, and management.
            </p>
            <div>
                 <StyledButtonYellow1 href="https://sahiwal.comsats.edu.pk/" target="_blank">
                  About Us
                 </StyledButtonYellow1>
            </div>
          </StyledComponents.StyledHomeAboutContent>
          <img src='./images/19.jpg'
            alt='' />
        </StyledComponents.StyledHomeAboutContainer>
      </StyledComponents.StyledHomeAbout>
      <StyledComponents.StyledHomeExplore>
        <StyledComponents.StyledHomeExploreImg>

        </StyledComponents.StyledHomeExploreImg>

        <StyledComponents.StyledHomeExploreText>
          <h2>
            Explore CUI Alumni
          </h2>

          

          <p>
          The CUI Sahiwal Alumni website is a platform that allows graduates to maintain a connection with 
          the university and enables the university to stay informed about its alumni even after they have completed their studies.
           Through the website, alumni can access resources and events, stay updated on news and developments at the university, 
           and connect with other alumni. 
          </p>
        </StyledComponents.StyledHomeExploreText>
      </StyledComponents.StyledHomeExplore>

      <StyledComponents.StyledHomeAlumniNumbers>
        <h2>COMSIANS BY THE NUMBERS!</h2>
        <StyledComponents.StyledHomeAlumniNumbersContainer>

          <StyledComponents.StyledHomeAlumniNumbersBlock>
            <h3>{(statsInfo && statsInfo.passedOut) || 600}</h3>
            <p>Enrolled Students</p>
          </StyledComponents.StyledHomeAlumniNumbersBlock>

          <StyledComponents.StyledHomeAlumniNumbersBlock>
            <h3>{(statsInfo && statsInfo.employed) || 195}</h3>
            <p>Total Passed Out</p>
          </StyledComponents.StyledHomeAlumniNumbersBlock>

          <StyledComponents.StyledHomeAlumniNumbersBlock>
            <h3>{(statsInfo && statsInfo.governmentEmployees) || 85}</h3>
            <p>Male Passed Out</p>
          </StyledComponents.StyledHomeAlumniNumbersBlock>

          <StyledComponents.StyledHomeAlumniNumbersBlock>
            <h3>{(statsInfo && statsInfo.seniorManagement) || 34}</h3>
            <p>Female Passed Out</p>
          </StyledComponents.StyledHomeAlumniNumbersBlock>

        </StyledComponents.StyledHomeAlumniNumbersContainer>
      </StyledComponents.StyledHomeAlumniNumbers>

      <StyledComponents.StyledHomeEvents>
        <h2>Upcoming Events</h2>

        <StyledComponents.StyledHomeEventsContainer>
          {
            events && events.map(event => (
              <StyledComponents.StyledHomeEventsBlock key={event._id}>
                <img src={event.image} alt='' />
                <StyledComponents.StyledHomeEventDescription>
                  <StyledComponents.StyledHomeEventInfo>
                    <h3>{event.name}</h3>
                    <div>{event.description}</div>
                    <span>
                      <p><ImLocation2 /><span>{event.location}</span></p>
                      <p><ImCalendar /><span>{event.timing}</span></p>
                    </span>
                  </StyledComponents.StyledHomeEventInfo>

                </StyledComponents.StyledHomeEventDescription>

              </StyledComponents.StyledHomeEventsBlock>
            ))
          }



          {/* <StyledComponents.StyledHomeEventsBlock>
            <img src='https://static.wixstatic.com/media/a3c153_ad9134e220794c6c86289255b9382644~mv2.png/v1/fill/w_310,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pierre-chatel-innocenti-Lk-nu_hX6ms-unsp.png'
              alt='' />
            <StyledComponents.StyledHomeEventDescription>
              <StyledComponents.StyledHomeEventInfo>
                <h3>Event Name</h3>
                <div>Write the description of event here. What the event is about and everything related to it</div>
                <p><ImLocation2 /><span>COMSATS Auditorium</span></p>
                <p><ImCalendar /><span>30 December 2022</span></p>
              </StyledComponents.StyledHomeEventInfo>

            </StyledComponents.StyledHomeEventDescription>

          </StyledComponents.StyledHomeEventsBlock> */}

        </StyledComponents.StyledHomeEventsContainer>

      </StyledComponents.StyledHomeEvents>
      <Footer />
    </>

  )
};

export default Home;