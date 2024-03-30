import React from "react"; 

const PayoutHistory = () => {
  return (
    <>
      <div className="earnings-box">
        <h3>Payout History</h3>

        <ul>
          <li>
            <div className="icon">
              <i className="bx bx-wallet"></i>
            </div>
            <ul>
              <li className="unpaid">Unpaid</li>
              <li>Period: 08/2020</li>
            </ul>
            <span>$100.00</span>
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-wallet"></i>
            </div>
            <ul>
              <li className="paid">Paid</li>
              <li>Period: 07/2020</li>
            </ul>
            <span>$70.00</span>
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-wallet"></i>
            </div>
            <ul>
              <li className="unpaid">Unpaid</li>
              <li>Period: 06/2020</li>
            </ul>
            <span>$75.00</span>
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-wallet"></i>
            </div>
            <ul>
              <li className="unpaid">Unpaid</li>
              <li>Period: 05/2020</li>
            </ul>
            <span>$125.00</span>
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-wallet"></i>
            </div>
            <ul>
              <li className="paid">Paid</li>
              <li>Period: 04/2020</li>
            </ul>
            <span>$90.00</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PayoutHistory;
