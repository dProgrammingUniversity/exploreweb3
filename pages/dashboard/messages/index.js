import NavbarTwo from "../../../components/_App/NavbarTwo";
import ChatContent from "../../../components/Dashboard/Chat/ChatContent";
import DashboardNavbar from '../../../components/Dashboard/DashboardNavbar';
import Footer from "../../../components/Dashboard/Footer";

const Messages = ({user}) => {
  return (
    <>
      <DashboardNavbar />

      <div className='main-content d-flex flex-column'>

        <NavbarTwo 
          userRole={user} 
        />

        <ChatContent />

        <Footer />
      </div>
    </>
  );
};

export default Messages;
