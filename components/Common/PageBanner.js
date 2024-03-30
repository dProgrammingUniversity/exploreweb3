import React from "react"
import Link from 'next/link';

const PageBanner = ({ pageTitle, pageName }) => {
  return (
    <>
      <div className='page-title-area page-title-bg2'>
        <div className='container'>
          <div className='page-title-content'>
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href='/'>
                  Home
                </Link>
              </li>
              <li>{pageName}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
