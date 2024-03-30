import React from "react"; 

const Footer = () => {
  return (
    <>
      <div className="flex-grow-1"></div>

      <div className="copyrights-area">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-6 col-md-6">
            <p>
              <i className="bx bx-copyright"></i> Indice. All rights reserved
            </p>
          </div>

          <div className="col-lg-6 col-sm-6 col-md-6 text-right">
            <p>
              Designed by ❤️{" "}
              <a href="https://envytheme.com/" target="_blank">
                EnvyTheme
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
