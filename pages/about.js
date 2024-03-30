import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import HowItWorks from '../components/Common/HowItWorks';
import Feedback from '../components/Common/Feedback';
import Countdowns from '../components/Common/Countdowns';
import Partner from '../components/Common/Partner';
import AboutContent from '../components/About/AboutContent';
import TeamMember from '../components/About/TeamMember';
import Footer from '../components/_App/Footer';

const About = ({ user }) => {
  return (
    <>
      <Navbar 
				userRole={user} 
			/>

      <PageBanner 
        pageTitle='About Us' 
        pageName='About Us' 
      />

      <AboutContent />
  
      <section className='funfacts-area pb-70'>
        <div className='container'>
          <div className='row'>
            <Countdowns />
          </div>
        </div>
      </section>

      <TeamMember />

      <HowItWorks />

      <Partner />

      <Feedback 
        bgColor='bg-f9f9f9' 
      />

      <Footer />
    </>
  )
}

export default About;