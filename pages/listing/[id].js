import React from 'react';
import axios from 'axios';
import Navbar from '../../components/_App/Navbar';
import baseUrl from '../../utils/baseUrl';
import Footer from '../../components/_App/Footer';
import StickyBox from "react-sticky-box";
import Link from "next/link";

const SingleListings = ({ user, listing, images }) => {
  return (
    <>
      <Navbar 
        userRole={user} 
      />

      <section className='listings-details-area pb-70'>
        <div className='listings-details-image'>
          <img src='/images/listings-details.jpg' alt='image' />

          <div className='container'>
            <div className='container'>
              <div className='listings-details-content'>
                <span className='meta'>
                  <i className='flaticon-furniture-and-household'></i>
                  {listing.category}
                </span>

                <h3>{listing.listingTitle}</h3>

                <h2>${listing.pricing}</h2>

                <ul className='d-flex align-items-center'>
                  <li className='phone-number'>
                    <a href={`mailto:${listing.phone}`}>
                      <i className='bx bx-phone-call'></i> {listing.phone}
                    </a>
                  </li>

                  <li className='time'>
                    <i className='bx bx-time-five'></i>
                    <span>Currently Open</span>
                    {listing.openingTime} - {listing.closingTime}
                  </li>

                  <li className='location'>
                    <i className='bx bx-map'></i>
                    <span>Location</span>
                    {listing.address}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
 
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='listings-details-desc'>
                <div 
                  className='listings_details_content'
                  dangerouslySetInnerHTML={{ __html: listing.description}} 
                />
   
                <div id='review'>
                  <div className='listings-review-comments'>
                    <div className='user-review'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='user'>
                            <div className='d-flex'>
                              <img src='/images/user1.jpg' alt='image' />
                              <div className='title'>
                                <h4>James Andy</h4>
                                <span>New York, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='comments'>
                            <div className='rating'>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo maecenas accumsan
                              lacus vel facilisis.
                            </p>
                            <div className='row m-0'>
                              <div className='col-lg-8 col-md-8 col-8 col-sm-8 p-0'>
                                <ul className='like-unlike'>
                                  <li>
                                    <a href='#'>Like</a>
                                  </li>
                                  <li>
                                    <a href='#'>Unlike</a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className='
                                col-lg-4 col-md-4 col-4 col-sm-4
                                p-0
                                text-right
                              '
                              >
                                <a href='#'>Comment</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='user-review'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='user'>
                            <div className='d-flex'>
                              <img src='/images/user2.jpg' alt='image' />
                              <div className='title'>
                                <h4>Sarah Taylor</h4>
                                <span>New York, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='comments'>
                            <div className='rating'>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo maecenas accumsan
                              lacus vel facilisis.
                            </p>
                            <div className='row m-0'>
                              <div className='col-lg-8 col-md-8 col-8 col-sm-8 p-0'>
                                <ul className='like-unlike'>
                                  <li>
                                    <a href='#'>Like</a>
                                  </li>
                                  <li>
                                    <a href='#'>Unlike</a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className='
                                col-lg-4 col-md-4 col-4 col-sm-4
                                p-0
                                text-right
                              '
                              >
                                <a href='#'>Comment</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='user-review'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='user'>
                            <div className='d-flex'>
                              <img src='/images/user3.jpg' alt='image' />
                              <div className='title'>
                                <h4>Jason Smith</h4>
                                <span>New York, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='comments'>
                            <div className='rating'>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo maecenas accumsan
                              lacus vel facilisis.
                            </p>
                            <div className='row m-0'>
                              <div className='col-lg-8 col-md-8 col-8 col-sm-8 p-0'>
                                <ul className='like-unlike'>
                                  <li>
                                    <a href='#'>Like</a>
                                  </li>
                                  <li>
                                    <a href='#'>Unlike</a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className='
                                col-lg-4 col-md-4 col-4 col-sm-4
                                p-0
                                text-right
                              '
                              >
                                <a href='#'>Comment</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id='add-review'>
                  <div className='review-form-wrapper'>
                    <h3>Add A Review</h3>
                    <p className='comment-notes'>
                      Your email address will not be published. Required fields
                      are marked <span>*</span>
                    </p>

                    <form>
                      <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                          <div className='sub-ratings'>
                            <div className='row'>
                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Cleanliness</h4>
                                  <div className='cleanliness-rating'>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar5'
                                      name='cleanliness-rating'
                                      value='5'
                                    />
                                    <label htmlFor='cleanlinessStar5'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar4'
                                      name='cleanliness-rating'
                                      value='4'
                                    />
                                    <label htmlFor='cleanlinessStar4'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar3'
                                      name='cleanliness-rating'
                                      value='3'
                                    />
                                    <label htmlFor='cleanlinessStar3'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar2'
                                      name='cleanliness-rating'
                                      value='2'
                                    />
                                    <label htmlFor='cleanlinessStar2'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar1'
                                      name='cleanliness-rating'
                                      value='1'
                                    />
                                    <label htmlFor='cleanlinessStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Accuracy</h4>
                                  <div className='accuracy-rating'>
                                    <input
                                      type='radio'
                                      id='accuracyStar5'
                                      name='accuracy-rating'
                                      value='5'
                                    />
                                    <label htmlFor='accuracyStar5'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar4'
                                      name='accuracy-rating'
                                      value='4'
                                    />
                                    <label htmlFor='accuracyStar4'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar3'
                                      name='accuracy-rating'
                                      value='3'
                                    />
                                    <label htmlFor='accuracyStar3'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar2'
                                      name='accuracy-rating'
                                      value='2'
                                    />
                                    <label htmlFor='accuracyStar2'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar1'
                                      name='accuracy-rating'
                                      value='1'
                                    />
                                    <label htmlFor='accuracyStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Location</h4>
                                  <div className='location-rating'>
                                    <input
                                      type='radio'
                                      id='locationStar5'
                                      name='location-rating'
                                      value='5'
                                    />
                                    <label htmlFor='locationStar5'></label>
                                    <input
                                      type='radio'
                                      id='locationStar4'
                                      name='location-rating'
                                      value='4'
                                    />
                                    <label htmlFor='locationStar4'></label>
                                    <input
                                      type='radio'
                                      id='locationStar3'
                                      name='location-rating'
                                      value='3'
                                    />
                                    <label htmlFor='locationStar3'></label>
                                    <input
                                      type='radio'
                                      id='locationStar2'
                                      name='location-rating'
                                      value='2'
                                    />
                                    <label htmlFor='locationStar2'></label>
                                    <input
                                      type='radio'
                                      id='locationStar1'
                                      name='location-rating'
                                      value='1'
                                    />
                                    <label htmlFor='locationStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Check-in</h4>
                                  <div className='checkin-rating'>
                                    <input
                                      type='radio'
                                      id='checkInStar5'
                                      name='rating'
                                      value='5'
                                    />
                                    <label htmlFor='checkInStar5'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar4'
                                      name='rating'
                                      value='4'
                                    />
                                    <label htmlFor='checkInStar4'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar3'
                                      name='rating'
                                      value='3'
                                    />
                                    <label htmlFor='checkInStar3'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar2'
                                      name='rating'
                                      value='2'
                                    />
                                    <label htmlFor='checkInStar2'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar1'
                                      name='rating'
                                      value='1'
                                    />
                                    <label htmlFor='checkInStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Communication</h4>
                                  <div className='communication-rating'>
                                    <input
                                      type='radio'
                                      id='communicationStar5'
                                      name='communication-rating'
                                      value='5'
                                    />
                                    <label htmlFor='communicationStar5'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar4'
                                      name='communication-rating'
                                      value='4'
                                    />
                                    <label htmlFor='communicationStar4'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar3'
                                      name='communication-rating'
                                      value='3'
                                    />
                                    <label htmlFor='communicationStar3'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar2'
                                      name='communication-rating'
                                      value='2'
                                    />
                                    <label htmlFor='communicationStar2'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar1'
                                      name='communication-rating'
                                      value='1'
                                    />
                                    <label htmlFor='communicationStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Value</h4>
                                  <div className='value-rating'>
                                    <input
                                      type='radio'
                                      id='valueStar5'
                                      name='value-rating'
                                      value='5'
                                    />
                                    <label htmlFor='valueStar5'></label>
                                    <input
                                      type='radio'
                                      id='valueStar4'
                                      name='value-rating'
                                      value='4'
                                    />
                                    <label htmlFor='valueStar4'></label>
                                    <input
                                      type='radio'
                                      id='valueStar3'
                                      name='value-rating'
                                      value='3'
                                    />
                                    <label htmlFor='valueStar3'></label>
                                    <input
                                      type='radio'
                                      id='valueStar2'
                                      name='value-rating'
                                      value='2'
                                    />
                                    <label htmlFor='valueStar2'></label>
                                    <input
                                      type='radio'
                                      id='valueStar1'
                                      name='value-rating'
                                      value='1'
                                    />
                                    <label htmlFor='valueStar1'></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-6 col-md-6'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Name *'
                            />
                          </div>
                        </div>

                        <div className='col-lg-6 col-md-6'>
                          <div className='form-group'>
                            <input
                              type='email'
                              className='form-control'
                              placeholder='Email *'
                            />
                          </div>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <div className='form-group'>
                            <textarea
                              placeholder='Your review'
                              className='form-control'
                              cols='30'
                              rows='6'
                            ></textarea>
                          </div>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <p className='comment-form-cookies-consent'>
                            <input type='checkbox' id='test1' />
                            <label htmlFor='test1'>
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </p>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <button type='submit'>Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-12'>
              <StickyBox offsetTop={90} offsetBottom={20}>
                <div className='listings-sidebar'>
                  <div className='listings-widget book_listings'>
                    <h3>Booking Online</h3>
                    <Link href='#' className='default-btn'>
                      Book Now
                    </Link>
                    <span>
                      By <a href='#'>Booking.com</a>
                    </span>
                  </div>

                  <div className='listings-widget listings_contact_details'>
                    <h3>Contact Details</h3>
                    <ul>
                      <li>
                        <i className='bx bx-envelope' ></i>
                        <a href={`mailto:${listing.email}`}>{listing.email}</a>
                      </li>

                      <li>
                        <i className='bx bx-phone-call'></i>
                        <a href={`tel:${listing.phone}`}>{listing.phone}</a>
                      </li>

                      <li>
                        <i className='bx bx-globe'></i>
                        <a href={`${listing.website}`}>{listing.website}</a>
                      </li>
                      
                      <li>
                        <i className='bx bx-map'></i> {listing.address}
                      </li>
                    </ul>
                  </div>

                  <div className='listings-widget listings_contact_details'>
                    <h3>Social Link</h3>
                    <ul>
                      <li>
                        <i className='bx bxl-facebook'></i>
                        <a 
                          href={`${listing.facebook}`} 
                          target="_blank" 
                          rel="noreferrer"
                        >
                          {listing.facebook}
                        </a>
                      </li>

                      <li>
                        <i className='bx bxl-twitter'></i>
                        <a 
                          href={`${listing.twitter}`}
                          target="_blank" 
                          rel="noreferrer"
                        >
                          {listing.twitter}
                        </a>
                      </li>

                      <li>
                        <i className='bx bxl-linkedin'></i>
                        <a 
                          href={`${listing.linkedin}`}
                          target="_blank" 
                          rel="noreferrer"
                        >
                          {listing.linkedin}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </StickyBox>
            </div>
          </div>
        </div>
      </section>

      <Footer 
        bgColor='bg-f5f5f5' 
      />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const id = query.id;
  const res = await axios.get(`${baseUrl}/api/v1/listings/${id}`);
  const listing = await res.data;

  return {
    props: {
      listing,
    },
  };
}

export default SingleListings;
