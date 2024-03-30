import React from "react"; 

const GalleryContent = () => {
  return (
    <>
      <div className="gallery-area bg-f9f9f9 pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery1.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery4.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery5.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery6.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery2.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <a data-fancybox="gallery" href="/images/gallery/gallery7.jpg">
                  <img src="/images/gallery/gallery7.jpg" alt="image" />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <a data-fancybox="gallery" href="/images/gallery/gallery8.jpg">
                  <img src="/images/gallery/gallery8.jpg" alt="image" />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery9.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <img src="/images/gallery/gallery3.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryContent;
