import React from 'react';
import Link from 'next/link';

const ContactForm = () => {
  return (
    <>
      <section className='contact-area pb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>Ready to Get Started?</h2>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='contact-image'>
                <img src='/images/contact.png' alt='image' />
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='contact-form'>
                <form>
                  <div className='row'>
                    <div className='col-lg-12 col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          name='name'
                          className='form-control'
                          id='name'
                          required
                          placeholder='Your name'
                        />
                      </div>
                    </div>

                    <div className='col-lg-12 col-md-6'>
                      <div className='form-group'>
                        <input
                          type='email'
                          name='email'
                          className='form-control'
                          id='email'
                          required
                          placeholder='Your email address'
                        />
                      </div>
                    </div>

                    <div className='col-lg-12 col-md-12'>
                      <div className='form-group'>
                        <input
                          type='text'
                          name='phone_number'
                          className='form-control'
                          id='phone_number'
                          required
                          placeholder='Your phone number'
                        />
                      </div>
                    </div>

                    <div className='col-lg-12 col-md-12'>
                      <div className='form-group'>
                        <textarea
                          name='message'
                          id='message'
                          className='form-control'
                          cols='30'
                          rows='6'
                          required
                          placeholder='Write your message...'
                        ></textarea>
                      </div>
                    </div>

                    <div className='col-lg-12 col-md-12'>
                      <button type='submit' className='default-btn'>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm;