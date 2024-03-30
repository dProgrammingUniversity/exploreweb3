import Link from "next/link";

const MiniAuth = ({
  displayMiniAuth,
  handleSearch,
  userRole,
  toggleAuthModal,
  handleChange,
  handleLogout,
}) => {
  return (
    <>
      <div className={displayMiniAuth ? "container active" : "container"}>
        <div className="option-inner">
          <div className="others-option">
            <div className="option-item">
              <form className="navbar-search-box" onSubmit={handleSearch}>
                <label>
                  <i className="flaticon-search"></i>
                </label>
                <input
                  type="text"
                  className="input-search"
                  placeholder="What are you looking for?"
                  name="search"
                  onChange={handleChange}
                />
              </form>
            </div>

            <div className="option-item">
              {userRole &&
              (userRole.role === "user" || userRole.role === "admin") ? (
                <span onClick={handleLogout}>
                  <i className="flaticon-user"></i> Logout
                </span>
              ) : (
                <span onClick={toggleAuthModal}>
                  <i className="flaticon-user"></i> Login / Register
                </span>
              )}
            </div>

            <div className="option-item">
              <Link href="/dashboard/add-listing" className="default-btn">
                <i className="flaticon-more"></i> Add Listing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniAuth;
