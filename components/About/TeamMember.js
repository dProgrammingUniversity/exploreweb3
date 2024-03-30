import React from 'react';
import Link from 'next/link';

const TeamMember = () => {
  return (
    <>
      <section className='team-area pt-100 pb-70 bg-f9f9f9'>
        <div className='container'>
          <div className='section-title'>
            <h2>Meet Our Awesome Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-team-member'>
                <div className='member-image'>
                  <img src='/images/team/team1.jpg' alt='image' />

                  <ul className='social'>
                    <li>
                      <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='member-content'>
                  <h3>
                    <a href='#'>James Anderson</a>
                  </h3>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-team-member'>
                <div className='member-image'>
                  <img src='/images/team/team2.jpg' alt='image' />

                  <ul className='social'>
                    <li>
                      <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='member-content'>
                  <h3>
                    <a href='#'>Sarah Taylor</a>
                  </h3>
                  <span>Co-Founder</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-team-member'>
                <div className='member-image'>
                  <img src='/images/team/team3.jpg' alt='image' />

                  <ul className='social'>
                    <li>
                      <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='member-content'>
                  <h3>
                    <a href='#'>Steven Smith</a>
                  </h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-team-member'>
                <div className='member-image'>
                  <img src='/images/team/team4.jpg' alt='image' />

                  <ul className='social'>
                    <li>
                      <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='member-content'>
                  <h3>
                    <a href='#'>John Capabel</a>
                  </h3>
                  <span>Programer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamMember;