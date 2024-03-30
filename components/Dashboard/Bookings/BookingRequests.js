import React from "react"; 

const BookingRequests = () => {
  return (
    <>
      <div className="bookings-listings-box">
        <h3>Booking Requests</h3>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="name">
                  <img src="/images/user1.jpg" alt="image" />
                  <div className="info">
                    <span>James Anderson</span>
                    <ul>
                      <li>
                        <a href="tel:+21444556521">+214 4455 6521</a>
                      </li>
                      <li>
                        <a href="mailto:hello@james.com">hello@james.com</a>
                      </li>
                    </ul>
                    <a href="mailto:hello@james.com" className="default-btn">
                      <i className="bx bx-envelope"></i> Send Message
                    </a>
                  </div>
                </td>

                <td className="details">
                  <h4>
                    Farmis Hotel & Restaurant{" "}
                    <span className="bookings-status pending">Pending</span>
                  </h4>

                  <ul>
                    <li>
                      <i className="bx bx-map"></i>
                      <span>Address:</span>
                      40 Journal Square, NG USA
                    </li>
                    <li>
                      <i className="bx bx-calendar"></i>
                      <span>Date:</span>
                      20/05/2020
                    </li>
                    <li>
                      <i className="bx bx-purchase-tag"></i>
                      <span>Price:</span>
                      $1500
                    </li>
                    <li>
                      <i className="bx bx-group"></i>
                      <span>Persons:</span>4 Peoples
                    </li>
                    <li>
                      <i className="bx bx-credit-card-front"></i>
                      <span>Payment:</span>
                      <strong className="paid">Paid</strong> using Paypal
                    </li>
                  </ul>
                </td>

                <td className="action">
                  <a href="#" className="default-btn">
                    <i className="bx bx-check-circle"></i> Approve
                  </a>
                  <a href="#" className="default-btn danger">
                    <i className="bx bx-x-circle"></i> Reject
                  </a>
                </td>
              </tr>

              <tr>
                <td className="name">
                  <img src="/images/user2.jpg" alt="image" />
                  <div className="info">
                    <span>Alina Smith</span>
                    <ul>
                      <li>
                        <a href="tel:+21444556521">+214 4455 6521</a>
                      </li>
                      <li>
                        <a href="mailto:hello@alina.com">hello@alina.com</a>
                      </li>
                    </ul>
                    <a href="mailto:hello@alina.com" className="default-btn">
                      <i className="bx bx-envelope"></i> Send Message
                    </a>
                  </div>
                </td>

                <td className="details">
                  <h4>
                    Skyview Shopping Center{" "}
                    <span className="bookings-status approved">Approved</span>
                  </h4>

                  <ul>
                    <li>
                      <i className="bx bx-map"></i>
                      <span>Address:</span>
                      55 County Laois, Ireland
                    </li>
                    <li>
                      <i className="bx bx-calendar"></i>
                      <span>Date:</span>
                      19/05/2020
                    </li>
                    <li>
                      <i className="bx bx-purchase-tag"></i>
                      <span>Price:</span>
                      $200
                    </li>
                    <li>
                      <i className="bx bx-credit-card-front"></i>
                      <span>Payment:</span>
                      <strong className="paid">Paid</strong> using Paypal
                    </li>
                  </ul>
                </td>

                <td className="action">
                  <button type="button" className="default-btn danger">
                    <i className="bx bx-x-circle"></i> Cancel
                  </button>
                </td>
              </tr>

              <tr>
                <td className="name">
                  <img src="/images/user3.jpg" alt="image" />
                  <div className="info">
                    <span>James Andy</span>
                    <ul>
                      <li>
                        <a href="tel:+21444556521">+214 4455 6521</a>
                      </li>
                      <li>
                        <a href="mailto:hello@andy.com">hello@andy.com</a>
                      </li>
                    </ul>
                    <a href="mailto:hello@andy.com" className="default-btn">
                      <i className="bx bx-envelope"></i> Send Message
                    </a>
                  </div>
                </td>

                <td className="details">
                  <h4>
                    Gym Training Center{" "}
                    <span className="bookings-status pending">Pending</span>
                  </h4>

                  <ul>
                    <li>
                      <i className="bx bx-map"></i>
                      <span>Address:</span>
                      Tilt Tilbury, United Kingdom
                    </li>
                    <li>
                      <i className="bx bx-calendar"></i>
                      <span>Date:</span>
                      18/05/2020
                    </li>
                    <li>
                      <i className="bx bx-purchase-tag"></i>
                      <span>Price:</span>
                      $214
                    </li>
                    <li>
                      <i className="bx bx-group"></i>
                      <span>Persons:</span>2 Peoples
                    </li>
                    <li>
                      <i className="bx bx-credit-card-front"></i>
                      <span>Payment:</span>
                      <strong className="unpaid">Unpaid</strong>
                    </li>
                  </ul>
                </td>

                <td className="action">
                  <button type="button" className="default-btn">
                    <i className="bx bx-check-circle"></i> Approve
                  </button>
                  <button type="button" className="default-btn danger">
                    <i className="bx bx-x-circle"></i> Reject
                  </button>
                </td>
              </tr>

              <tr>
                <td className="name">
                  <img src="/images/user4.jpg" alt="image" />
                  <div className="info">
                    <span>Steven Smith</span>
                    <ul>
                      <li>
                        <a href="tel:+21444556521">+214 4455 6521</a>
                      </li>
                      <li>
                        <a href="mailto:hello@steven.com">hello@steven.com</a>
                      </li>
                    </ul>
                    <a href="mailto:hello@steven.com" className="default-btn">
                      <i className="bx bx-envelope"></i> Send Message
                    </a>
                  </div>
                </td>

                <td className="details">
                  <h4>
                    The Magician Restaurant{" "}
                    <span className="bookings-status canceled">Canceled</span>
                  </h4>

                  <ul>
                    <li>
                      <i className="bx bx-map"></i>
                      <span>Address:</span>
                      40 Journal Square, NG USA
                    </li>
                    <li>
                      <i className="bx bx-calendar"></i>
                      <span>Date:</span>
                      17/05/2020
                    </li>
                    <li>
                      <i className="bx bx-purchase-tag"></i>
                      <span>Price:</span>
                      $200
                    </li>
                    <li>
                      <i className="bx bx-credit-card-front"></i>
                      <span>Payment:</span>
                      <strong className="paid">Paid</strong> using Paypal
                    </li>
                  </ul>
                </td>

                <td className="action"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BookingRequests;
