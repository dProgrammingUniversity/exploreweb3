import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="chat-sidebar-header d-flex align-items-center">
          <div className="avatar me-2">
            <img
              src="/images/user1.jpg"
              width="50"
              height="50"
              className="rounded-circle"
              alt="image"
            />
          </div>

          <form className="form-group position-relative mb-0">
            <label>
              <i className="bx bx-search"></i>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Search here..."
            />
          </form>
        </div>

        <div className="sidebar-content d-flex chat-sidebar" data-simplebar>
          <div className="chat-menu">
            <label className="d-block list-group-label mt-0">Chats</label>

            <ul className="list-group list-group-user list-unstyled mb-0">
              <li>
                <div className="d-flex align-items-center">
                  <div className="avatar me-2">
                    <img
                      src="/images/user2.jpg"
                      width="50"
                      height="50"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span className="status-busy"></span>
                  </div>

                  <div className="user-name">
                    <h6>Ellen Cranford</h6>
                    <span className="d-block">Welcome to React...</span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <div className="avatar me-2">
                    <img
                      src="/images/user3.jpg"
                      width="50"
                      height="50"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span className="status-online"></span>
                  </div>

                  <div className="user-name">
                    <h6>Sherell Steckler</h6>
                    <span className="d-block">React World...</span>
                  </div>
                </div>
              </li>
            </ul>

            <label className="d-block list-group-label">Contacts</label>

            <ul className="list-group list-group-user list-unstyled mb-0">
              <li>
                <div className="d-flex align-items-center">
                  <div className="avatar me-2">
                    <img
                      src="/images/user4.jpg"
                      width="50"
                      height="50"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span className="status-away"></span>
                  </div>

                  <div className="user-name">
                    <h6>Mitsue Dove</h6>
                    <span className="d-block">New Order..</span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <div className="avatar me-2">
                    <img
                      src="/images/user5.jpg"
                      width="50"
                      height="50"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span className="status-offline"></span>
                  </div>

                  <div className="user-name">
                    <h6>Sasha Abele</h6>
                    <span className="d-block">Lorem Ipsum...</span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <div className="avatar me-2">
                    <img
                      src="/images/user6.jpg"
                      width="50"
                      height="50"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span className="status-online"></span>
                  </div>

                  <div className="user-name">
                    <h6>Angeles Valls</h6>
                    <span className="d-block">Lorem come...</span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <div className="avatar me-2">
                    <img
                      src="/images/user7.jpg"
                      width="50"
                      height="50"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span className="status-away"></span>
                  </div>

                  <div className="user-name">
                    <h6>Viki Hankins</h6>
                    <span className="d-block">Web HTML...</span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <div className="avatar me-2">
                    <img
                      src="/images/user8.jpg"
                      width="50"
                      height="50"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span className="status-busy"></span>
                  </div>

                  <div className="user-name">
                    <h6>Shery Corlett</h6>
                    <span className="d-block">HTML products...</span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <div className="avatar me-2">
                    <img
                      src="/images/user9.jpg"
                      width="50"
                      height="50"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span className="status-offline"></span>
                  </div>

                  <div className="user-name">
                    <h6>Jame Kolar</h6>
                    <span className="d-block">Admin template...</span>
                  </div>
                </div>
              </li>

              <li>
                <div className="d-flex align-items-center">
                  <div className="avatar me-2">
                    <img
                      src="/images/user10.jpg"
                      width="50"
                      height="50"
                      className="rounded-circle"
                      alt="image"
                    />
                    <span className="status-online"></span>
                  </div>

                  <div className="user-name">
                    <h6>Damon Alvelo</h6>
                    <span className="d-block">Web responsive...</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
