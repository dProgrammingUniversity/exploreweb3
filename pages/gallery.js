import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import GalleryContent from "../components/Gallery/GalleryContent";

const Gallery = ({ user }) => {
  return (
    <>
      <Navbar userRole={user} />

      <PageBanner pageTitle="Gallery" pageName="Gallery" />

      <GalleryContent />

      <Footer />
    </>
  );
};

export default Gallery;
