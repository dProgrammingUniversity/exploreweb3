import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const AboutContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <section className='about-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='about-content'>
                <h2>How We Were Established</h2>
                <span>
                  <strong>
                    Check video presentation to find out more about us.
                  </strong>
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  Every month they moved their money the old way – which wasted
                  their time and money. So they invented a beautifully simple
                  workaround that became a billion-dollar business.
                </p>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='about-image'>
                <img src='/images/about-img.jpg' alt='image' />
                <div
                  className='video-btn'
                  onClick={ () => setToggler(!toggler) }
                >
                  <i className='bx bx-play'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FsLightbox
        toggler={ toggler }
        sources={ [
          'https://www.youtube.com/embed/bk7McNUjWgw'
        ] }
      />
    </>
  )
}

export default AboutContent;