import React from "react";
import Link from "next/link";

const Invoices = () => {
  return (
    <>
      <div className="invoices-box">
        <h3>Invoices</h3>

        <ul>
          <li>
            <div className="icon">
              <i className="bx bx-file-blank"></i>
            </div>

            <ul>
              <li className="paid">Paid</li>
              <li>Order: #181815</li>
              <li>Date: 14/08/2020</li>
            </ul>

            <span>Premium Plan</span>

            <Link href="/dashboard/invoice" className="default-btn">
              View Invoice
            </Link>
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-file-blank"></i>
            </div>

            <ul>
              <li className="unpaid">Unpaid</li>
              <li>Order: #181814</li>
              <li>Date: 13/08/2020</li>
            </ul>

            <span>Advance Plan</span>

            <Link href="/dashboard/invoice" className="default-btn">
              View Invoice
            </Link>
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-file-blank"></i>
            </div>

            <ul>
              <li className="paid">Paid</li>
              <li>Order: #181813</li>
              <li>Date: 12/08/2020</li>
            </ul>

            <span>Starter Plan</span>
            <Link href="#" className="default-btn">
              View Invoice
            </Link>
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-file-blank"></i>
            </div>

            <ul>
              <li className="unpaid">Unpaid</li>
              <li>Order: #181812</li>
              <li>Date: 11/08/2020</li>
            </ul>

            <span>Basic Plan</span>

            <Link href="/dashboard/invoice" className="default-btn">
              View Invoice
            </Link>
          </li>

          <li>
            <div className="icon">
              <i className="bx bx-file-blank"></i>
            </div>

            <ul>
              <li className="paid">Paid</li>
              <li>Order: #181815</li>
              <li>Date: 14/08/2020</li>
            </ul>

            <span>Premium Plan</span>
            <Link href="/dashboard/invoice" className="default-btn">
              View Invoice
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Invoices;
