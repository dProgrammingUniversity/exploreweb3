import React from "react";  
import Sidebar from "./Sidebar";

const ChatContent = () => {
  return (
    <>
      <div className="chat-content-area">
        <div className="sidebar-left">
          <Sidebar />
        </div>

        <div className="content-right">
          <div className="chat-area">
            <div className="chat-list-wrapper">
              <div className="chat-list">
                <div className="chat-list-header d-flex align-items-center">
                  <div className="header-left d-flex align-items-center me-2">
                    <div className="avatar me-2">
                      <img
                        src="/images/user2.jpg"
                        width="70"
                        height="70"
                        className="rounded-circle"
                        alt="image"
                      />
                      <span className="status-online"></span>
                    </div>
                    <h6 className="mb-0">Ellen Cranford</h6>
                  </div>

                  <div className="header-right text-right w-100">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <span className="favorite d-block">
                          <i className="bx bx-star"></i>
                        </span>
                      </li>
                      <li>
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded"></i>
                          </button>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i className="bx bx-pin"></i> Pin to Top
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i className="bx bx-trash"></i> Delete Chat
                            </a>
                            <a
                              className="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <i className="bx bx-block"></i> Block
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="chat-container" data-simplebar>
                  <div className="chat-content">
                    <div className="chat">
                      <div className="chat-avatar">
                        <a className="d-inline-block">
                          <img
                            src="/images/user1.jpg"
                            width="50"
                            height="50"
                            className="rounded-circle"
                            alt="image"
                          />
                        </a>
                      </div>

                      <div className="chat-body">
                        <div className="chat-message">
                          <p>
                            👋Hi​! I'm a Indice. Let me know if you have any
                            questions regarding our tool or set up a demo to
                            learn more!
                          </p>
                          <span className="time d-block">7:45 AM</span>
                        </div>
                      </div>
                    </div>

                    <div className="chat chat-left">
                      <div className="chat-avatar">
                        <a className="d-inline-block">
                          <img
                            src="/images/user2.jpg"
                            width="50"
                            height="50"
                            className="rounded-circle"
                            alt="image"
                          />
                        </a>
                      </div>

                      <div className="chat-body">
                        <div className="chat-message">
                          <p>Could you describe EnvyTheme in one sentence?</p>
                          <span className="time d-block">7:45 AM</span>
                        </div>
                      </div>
                    </div>

                    <div className="chat">
                      <div className="chat-avatar">
                        <a className="d-inline-block">
                          <img
                            src="/images/user1.jpg"
                            width="50"
                            height="50"
                            className="rounded-circle"
                            alt="image"
                          />
                        </a>
                      </div>

                      <div className="chat-body">
                        <div className="chat-message">
                          <p>
                            <a
                              href="https://envytheme.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              EnvyTheme.com
                            </a>
                          </p>
                          <span className="time d-block">7:45 AM</span>
                        </div>
                      </div>
                    </div>

                    <div className="badge badge-pill badge-light my-3">
                      Yesterday
                    </div>

                    <div className="chat chat-left">
                      <div className="chat-avatar">
                        <a className="d-inline-block">
                          <img
                            src="/images/user2.jpg"
                            width="50"
                            height="50"
                            className="rounded-circle"
                            alt="image"
                          />
                        </a>
                      </div>

                      <div className="chat-body">
                        <div className="chat-message">
                          <p>
                            What makes you different from other learning
                            platforms?
                          </p>
                          <span className="time d-block">7:45 AM</span>
                        </div>
                      </div>
                    </div>

                    <div className="chat">
                      <div className="chat-avatar">
                        <a className="d-inline-block">
                          <img
                            src="/images/user1.jpg"
                            width="50"
                            height="50"
                            className="rounded-circle"
                            alt="image"
                          />
                        </a>
                      </div>

                      <div className="chat-body">
                        <div className="chat-message">
                          <p>
                            The best Innovative Chatbot and automations are here
                            to expand.
                          </p>
                          <span className="time d-block">7:45 AM</span>
                        </div>
                      </div>
                    </div>

                    <div className="chat chat-left">
                      <div className="chat-avatar">
                        <a className="d-inline-block">
                          <img
                            src="/images/user2.jpg"
                            width="50"
                            height="50"
                            className="rounded-circle"
                            alt="image"
                          />
                        </a>
                      </div>

                      <div className="chat-body">
                        <div className="chat-message">
                          <p>Great, Thank You!❤️</p>
                          <span className="time d-block">7:45 AM</span>
                        </div>
                      </div>
                    </div>

                    <div className="chat">
                      <div className="chat-avatar">
                        <a className="d-inline-block">
                          <img
                            src="/images/user1.jpg"
                            width="50"
                            height="50"
                            className="rounded-circle"
                            alt="image"
                          />
                        </a>
                      </div>

                      <div className="chat-body">
                        <div className="chat-message">
                          <p>👋Hi​! I'm a Indice.</p>
                          <span className="time d-block">7:45 AM</span>
                        </div>
                      </div>
                    </div>

                    <div className="chat chat-left">
                      <div className="chat-avatar">
                        <a className="d-inline-block">
                          <img
                            src="/images/user2.jpg"
                            width="50"
                            height="50"
                            className="rounded-circle"
                            alt="image"
                          />
                        </a>
                      </div>

                      <div className="chat-body">
                        <div className="chat-message">
                          <p>
                            What makes you different from other learning
                            platforms?
                          </p>
                          <span className="time d-block">7:45 AM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chat-list-footer">
                  <form className="d-flex align-items-center">
                    <div className="btn-box d-flex align-items-center me-2">
                      <button
                        className="emoji-btn d-inline-block me-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Emoji"
                        type="button"
                      >
                        <i className="bx bx-smile"></i>
                      </button>

                      <button
                        className="file-attachment-btn d-inline-block"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="File Attachment"
                        type="button"
                      >
                        <i className="bx bx-paperclip"></i>
                      </button>
                    </div>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your message..."
                    />

                    <button type="submit" className="send-btn d-inline-block">
                      Send <i className="bx bx-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatContent;
