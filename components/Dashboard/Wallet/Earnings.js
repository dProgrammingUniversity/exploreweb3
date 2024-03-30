import React from "react"; 

const Earnings = () => {
  return (
    <>
      <div className="earnings-box">
        <h3>
          Earnings <span className="comission-taken">Fee: 10%</span>
        </h3>

        <ul>
          <li>
            <div className="icon">
              <i className="bx bx-cart"></i>
            </div>
            <ul>
              <li>Date: 17/08/2020</li>
              <li>Order: #181812</li>
              <li className="price">$200.00</li>
              <li className="fee-price">Fee: $20.00</li>
              <li className="price">
                Net Earning: <strong>$180.00</strong>
              </li>
            </ul>
            <span>Farmis Restaurant</span>
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-shopping-bag"></i>
            </div>
            <ul>
              <li>Date: 16/08/2020</li>
              <li>Order: #181811</li>
              <li className="price">$76.00</li>
              <li className="fee-price">Fee: $6.00</li>
              <li className="price">
                Net Earning: <strong>$70.00</strong>
              </li>
            </ul>
            <span>Shopping Complex Center</span>
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-cart"></i>
            </div>
            <ul>
              <li>Date: 15/08/2020</li>
              <li>Order: #181810</li>
              <li className="price">$80.00</li>
              <li className="fee-price">Fee: $5.00</li>
              <li className="price">
                Net Earning: <strong>$75.00</strong>
              </li>
            </ul>
            <span>Gym Training Center</span>
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-shopping-bag"></i>
            </div>
            <ul>
              <li>Date: 14/08/2020</li>
              <li>Order: #181809</li>
              <li className="price">$150.00</li>
              <li className="fee-price">Fee: $25.00</li>
              <li className="price">
                Net Earning: <strong>$125.00</strong>
              </li>
            </ul>
            <span>The Magician Restaurant</span>
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-cart"></i>
            </div>
            <ul>
              <li>Date: 13/08/2020</li>
              <li>Order: #181808</li>
              <li className="price">$100.00</li>
              <li className="fee-price">Fee: $10.00</li>
              <li className="price">
                Net Earning: <strong>$90.00</strong>
              </li>
            </ul>
            <span>Oriental Shopping Center</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Earnings;
