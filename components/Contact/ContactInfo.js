import React from 'react';

const ContactInfo = () => {
  return (
    <>
      <section className='contact-info-area pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='contact-info-box'>
                <div className='back-icon'>
                  <i className='bx bx-map'></i>
                </div>
                <div className='icon'>
                  <i className='bx bx-map'></i>
                </div>
                <h3>Our Address</h3>
                <p>175 5th Ave, New York, NY 10010, United States</p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='contact-info-box'>
                <div className='back-icon'>
                  <i className='bx bx-phone-call'></i>
                </div>
                <div className='icon'>
                  <i className='bx bx-phone-call'></i>
                </div>
                <h3>Contact</h3>
                <p>
                  Mobile: <a href='tel:+44457895789'>(+44) - 45789 - 5789</a>
                </p>
                <p>
                  E-mail: <a href='mailto:hello@indice.com'>hello@indice.com</a>
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 offset-lg-0 offset-md-3'>
              <div className='contact-info-box'>
                <div className='back-icon'>
                  <i className='bx bx-time-five'></i>
                </div>
                <div className='icon'>
                  <i className='bx bx-time-five'></i>
                </div>
                <h3>Hours of Operation</h3>
                <p>Monday - Friday: 09:00 - 20:00</p>
                <p>Sunday & Saturday: 10:30 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactInfo;