import React, { useState, useContext } from "react";
import { IndiceContext } from "../../contexts";
import { Alert, Spinner } from "react-bootstrap";
import Link from "next/link";

//utils
import { handleLogin } from "../../utils/auth";
import axios from "axios";
import catchErrors from "../../utils/catchErrors";
import baseUrl from "../../utils/baseUrl";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

//auth state
const INITIAL_USER = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const INITIAL_AUTH_STATE = {
  email: "",
  password: "",
};

const AuthModal = () => {
  //context value
  const { displayAuthModal, toggleAuthModal } = useContext(IndiceContext);

  //auth
  const [user, setUser] = useState(INITIAL_USER);
  const [authUser, setAuthUser] = useState(INITIAL_AUTH_STATE);
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const [registerResponse, setRegisterResponse] = useState(false);
  const [display, setDisplay] = useState(false);
  const onDismiss = () => setError(false);

  //register handling

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const url = `${baseUrl}/api/v1/auth/signup`;
      const payload = { ...user };
      const response = await axios.post(url, payload);

      handleLogin(response.data);
      setLoading(false);

      setRegisterResponse(response.data);

      setDisplay(true);

      setUser(INITIAL_USER);
      toggleAuthModal();
    } catch (error) {
      catchErrors(error, setRegisterError);

      window.setTimeout(() => {
        setRegisterError("");
      }, 10000);
    } finally {
      setLoading(false);
    }
  };

  //authentication handling

  const handleAuthChange = (e) => {
    const { name, value } = e.target;
    setAuthUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const url = `${baseUrl}/api/v1/auth/signin`;
      const payload = { ...authUser };
      const response = await axios.post(url, payload);
      handleLogin(response.data);
      setLoading(false);
      toggleAuthModal();
    } catch (error) {
      catchErrors(error, setLoginError);

      window.setTimeout(() => {
        setLoginError("");
      }, 10000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={
          displayAuthModal
            ? "modal loginRegisterModal show"
            : "modal loginRegisterModal"
        }
        id="loginRegisterModal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <Tabs>
              <button type="button" className="close" onClick={toggleAuthModal}>
                <i className="bx bx-x"></i>
              </button>

              <ul className="nav nav-tabs" id="myTab">
                <TabList>
                  <Tab className="nav-item">
                    <a className="nav-link" id="login-tab">
                      Login
                    </a>
                  </Tab>
                  <Tab className="nav-item">
                    <a className="nav-link" id="register-tab">
                      Register
                    </a>
                  </Tab>
                </TabList>
              </ul>

              <div className="tab-content" id="myTabContent">
                <TabPanel>
                  <div className="tab-pane " id="login">
                    <div className="miran-login">
                      <div className="login-with-account">
                        <span>Login with</span>
                        <ul>
                          <li>
                            <a href="#" className="facebook">
                              <i className="bx bxl-facebook"></i> Facebook
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter">
                              <i className="bx bxl-twitter"></i> Twitter
                            </a>
                          </li>
                        </ul>
                      </div>
                      <span className="sub-title">
                        <span>Or login with</span>
                      </span>
                      {loginError ? (
                        <Alert
                          variant="danger"
                          show={loginError ? true : false}
                          onClose={onDismiss}
                        >
                          {loginError}
                        </Alert>
                      ) : (
                        ""
                      )}
                      <form onSubmit={handleAuthSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={authUser.email}
                            onChange={handleAuthChange}
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            name="password"
                            value={authUser.password}
                            onChange={handleAuthChange}
                          />
                        </div>

                        <button type="submit">
                          Login Now{" "}
                          {loading ? (
                            <Spinner
                              color="success"
                              className="product-spinner"
                              animation="border"
                              size="sm"
                            />
                          ) : (
                            ""
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="tab-pane" id="register">
                    <div className="miran-register">
                      <div className="register-with-account">
                        <span>Register with</span>
                        <ul>
                          <li>
                            <a href="#" className="facebook">
                              <i className="bx bxl-facebook"></i> Facebook
                            </a>
                          </li>
                          <li>
                            <a href="#" className="twitter">
                              <i className="bx bxl-twitter"></i> Twitter
                            </a>
                          </li>
                        </ul>
                      </div>
                      <span className="sub-title">
                        <span>Or Register with</span>
                      </span>
                      {registerError ? (
                        <Alert
                          variant="danger"
                          show={registerError ? true : false}
                          onClose={onDismiss}
                        >
                          {registerError}
                        </Alert>
                      ) : (
                        ""
                      )}
                      {/* {display ? (
                        <Alert variant='success' show={display ? true : false}>
                          {registerResponse}
                        </Alert>
                      ) : (
                        ''
                      )} */}
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Name"
                            className="form-control"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            className="form-control"
                            name="confirmPassword"
                            value={user.confirmPassword}
                            onChange={handleChange}
                          />
                        </div>

                        <button type="submit">
                          Register Now{" "}
                          {loading ? (
                            <Spinner
                              color="success"
                              className="product-spinner"
                              animation="border"
                              size="sm"
                            />
                          ) : (
                            ""
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
