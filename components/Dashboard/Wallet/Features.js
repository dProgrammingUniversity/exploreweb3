import React from "react"; 

const Features = () => {
  return (
    <>
      <div className="row jistify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="stats-card-box">
            <div className="icon-box">
              <i className="bx bxs-badge-dollar"></i>
            </div>
            <span className="sub-title">
              Withdrawable Balance{" "}
              <strong className="wallet-currency">USD</strong>
            </span>
            <h3>100.88</h3>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="stats-card-box">
            <div className="icon-box">
              <i className="bx bx-dollar"></i>
            </div>
            <span className="sub-title">
              Total Earnings <strong className="wallet-currency">USD</strong>
            </span>
            <h3>542.64</h3>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="stats-card-box">
            <div className="icon-box">
              <i className="bx bx-cart"></i>
            </div>
            <span className="sub-title">Total Orders</span>
            <h3>08</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
