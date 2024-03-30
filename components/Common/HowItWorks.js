import React from 'react';

const HowItWorks = ({bgColor}) => {
  return (
    <>
      <section className={`how-it-works-area pt-100 pb-70 ${bgColor}`}>
        <div className='container'>
          <div className='section-title'>
            <h2>How It Works</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-how-it-works-box'>
                <div className='icon'>
                  <i className='flaticon-placeholder'></i>
                </div>
                <h3>Find Interesting Place</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-how-it-works-box'>
                <div className='icon'>
                  <i className='flaticon-support-1'></i>
                </div>
                <h3>Contact a Few Owners</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-how-it-works-box'>
                <div className='icon'>
                  <i className='flaticon-tick'></i>
                </div>
                <h3>Make a Reservation</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
