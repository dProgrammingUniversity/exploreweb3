import { useEffect, useState, useCallback } from "react";
import { parseCookies } from "nookies";
import { Modal, Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import catchErrors from "../../utils/catchErrors";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";

import controls from "../../utils/RTEControl";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

import { useDropzone } from "react-dropzone";
import Link from "next/link";

const INITIAL_LISTINGS = {
  listingTitle: "",
  category: "",
  keyword: "",
  city: "",
  address: "",
  state: "",
  zipcode: "",
  gallery: "",
  description: "",
  email: "",
  website: "",
  phone: "",
  facebook: "",
  twitter: "",
  linkedin: "",
  facilities: "",
  pricing: "",
};

const UpdateListing = ({ show, handleClose, updateList, updatedListings }) => {
  const [files, setFiles] = useState([]);
  const { token } = parseCookies();
  const [updateListings, setUpdateListings] = useState(INITIAL_LISTINGS);
  const [realOpeningTime, setRealOpeningTime] = useState("");
  const [realClosingTime, setRealClosingTime] = useState("");
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [display, setDisplay] = useState(false);

  //select form value
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(async (acceptedFile) => {
      const data = new FormData();
      data.append("file", acceptedFile);

      data.append("upload_preset", process.env.UPLOAD_PRESET);
      data.append("cloud_name", process.env.CLOUD_NAME);

      const response = await axios.post(process.env.CLOUDINARY_URL, data);
      const mediaUrl = await response.data.url;

      setFiles((old) => [...old, mediaUrl]);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  const thumbs = files.map((file, i) => (
    <div key={i} className="drop-gallery-thumb">
      <img src={file} alt="Image" />
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  useEffect(() => {
    setUpdateListings({
      listingTitle: updateList.listingTitle,
      category: updateList.category,
      keyword: updateList.keyword,
      city: updateList.city,
      address: updateList.address,
      state: updateList.state,
      zipcode: updateList.zipcode,
      gallery: updateList.gallery,
      description: updateList.description,
      email: updateList.email,
      website: updateList.website,
      phone: updateList.phone,
      facebook: updateList.facebook,
      twitter: updateList.twitter,
      linkedin: updateList.linkedin,
      facilities: updateList.facilities,
      openingTime: updateList.openingTime,
      closingTime: updateList.closingTime,
      pricing: updateList.pricing,
    });
  }, [updateList]);

  const handleChange = (e) => {
    setDisable(false);
    const { name, value, files } = e.target;
    if (name === "media") {
      let fileSize = files[0].size / 1024 / 1024;
      if (fileSize > 2) {
        e.target.value = null;
        return;
      }
      setUpdateListings((prevState) => ({
        ...prevState,
        gallery: files[0],
      }));
    } else {
      setUpdateListings((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const url = `${baseUrl}/api/v1/listings`;

      const {
        listingTitle,
        keyword,
        address,
        state,
        zipcode,
        gallery,
        description,
        email,
        website,
        phone,
        facebook,
        twitter,
        linkedin,
        facilities,
        pricing,
      } = updateListings;

      const payload = {
        id: updateList.id,
        listingTitle,
        category: category ? category : updateList.category,
        keyword,
        city: city ? city : updateList.city,
        address,
        state,
        zipcode,
        gallery: files.length > 0 ? files : gallery,
        description,
        email,
        website,
        phone,
        facebook,
        twitter,
        linkedin,
        facilities,
        openingTime: realOpeningTime ? realOpeningTime : updateList.openingTime,
        closingTime: realClosingTime ? realClosingTime : updateList.closingTime,
        pricing,
      };

      let response = await axios.put(url, payload, {
        headers: { Authorization: token },
      });

      updatedListings(response.data.listings);
      setUpdateListings(INITIAL_LISTINGS);

      handleClose();

      setLoading(false);
      setDisable(true);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        size="xl"
        centered
        show={show}
        onHide={handleClose}
        className="update-listing-modal"
      >
        <Modal.Header closeButton className="close-button"></Modal.Header>
        <Modal.Body className="update-modal">
          <Container>
            <div className="breadcrumb-area">
              <h1>Add Listings</h1>
              <ol className="breadcrumb">
                <li className="item">
                  <Link href="/dashboard">Home</Link>
                </li>
                <li className="item">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className="item">Add Listings</li>
              </ol>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="add-listings-box">
                <h3>Basic Informations</h3>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="bx bx-briefcase-alt"></i> Listing Title:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name of your business"
                        name="listingTitle"
                        value={updateListings.listingTitle || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="bx bx-duplicate"></i> Type / Category:
                      </label>
                      <select
                        className="dashbaord-category-select"
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option>Select Category</option>
                        <option>Restaurants</option>
                        <option>Events</option>
                        <option>Clothing</option>
                        <option>Bank</option>
                        <option>Fitness</option>
                        <option>Bookstore</option>
                        <option>Shopping</option>
                        <option>Hotels</option>
                        <option>Hospitals</option>
                        <option>Culture</option>
                        <option>Beauty</option>
                      </select>
                    </div>
                  </div>

                  {/* <div className="col-lg-6 col-md-6">
										<div className="form-group">
											<label>
												<i className="bx bxs-key"></i>{" "}
												Keywords:
											</label>
											<input
												type="text"
												className="form-control"
												placeholder="Maximum 15 , should be separated by commas"
												name="keyword"
												value={
													updateListings.keyword || ""
												}
												onChange={handleChange}
											/>
										</div>
									</div> */}
                </div>
              </div>

              <div className="add-listings-box">
                <h3>Location</h3>

                <div className="row">
                  {/* <div className="col-lg-6 col-md-6">
										<div className="form-group">
											<label>
												<i className="bx bx-menu-alt-left"></i>{" "}
												City:
											</label>
											<select
												className="dashbaord-category-select"
												onChange={(e) =>
													setCity(e.target.value)
												}
											>
												<option>Select City</option>
												<option>New York</option>
												<option>London</option>
												<option>Paris</option>
												<option>Moscow</option>
												<option>Rome</option>
											</select>
										</div>
									</div> */}

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="bx bx-menu-alt-left"></i> Address:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. 55 County Laois"
                        name="address"
                        value={updateListings.address || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* <div className="col-lg-6 col-md-6">
										<div className="form-group">
											<label>
												<i className="bx bx-menu-alt-left"></i>{" "}
												State:
											</label>
											<input
												type="text"
												className="form-control"
												name="state"
												value={
													updateListings.state || ""
												}
												onChange={handleChange}
											/>
										</div>
									</div> */}

                  {/* <div className="col-lg-6 col-md-6">
										<div className="form-group">
											<label>
												<i className="bx bx-menu-alt-left"></i>{" "}
												Zip-Code:
											</label>
											<input
												type="text"
												className="form-control"
												name="zipcode"
												value={
													updateListings.zipcode || ""
												}
												onChange={handleChange}
											/>
										</div>
									</div> */}
                </div>
              </div>

              <div className="add-listings-box">
                <h3>Gallery</h3>

                <div {...getRootProps()} className="dropzone">
                  {files.length > 0 ? (
                    <div className="gallery-flex">
                      {thumbs}
                      <input {...getInputProps()} />
                    </div>
                  ) : (
                    <div className="file-upload-box">
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="add-listings-box">
                <h3>Details</h3>

                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="bx bx-text"></i> Description:
                      </label>

                      <RichTextEditor
                        controls={controls}
                        value={updateListings.description}
                        onChange={(e) =>
                          setUpdateListings((prevState) => ({
                            ...prevState,
                            description: e,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="bx bx-envelope"></i> Email Address:{" "}
                        <span>(optional)</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={updateListings.email || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="bx bx-globe"></i> Website:{" "}
                        <span>(optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="website"
                        value={updateListings.website || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="bx bx-phone-call"></i> Phone:{" "}
                        <span>(optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={updateListings.phone || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="bx bxl-facebook-square"></i> Facebook:{" "}
                        <span>(optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="https://www.facebook.com/"
                        name="facebook"
                        value={updateListings.facebook || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="bx bxl-twitter"></i> Twitter:{" "}
                        <span>(optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="https://www.twitter.com/"
                        name="twitter"
                        value={updateListings.twitter || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="bx bxl-linkedin"></i> Linkedin:{" "}
                        <span>(optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="https://www.linkedin.com/"
                        name="linkedin"
                        value={updateListings.linkedin || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="add-listings-box padding-field">
                <h3>Opening/Closing Hours</h3>

                <div className="row opening-day align-items-center">
                  <div className="col-lg-5 col-md-6">
                    <select
                      className="dashbaord-category-select"
                      onChange={(e) => setRealOpeningTime(e.target.value)}
                    >
                      <option>Opening Time</option>
                      <option>Closed</option>
                      <option>01:00 AM</option>
                      <option>02:00 AM</option>
                      <option>03:00 AM</option>
                      <option>04:00 AM</option>
                      <option>05:00 AM</option>
                      <option>06:00 AM</option>
                      <option>07:00 AM</option>
                      <option>08:00 AM</option>
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 AM</option>
                      <option>01:00 PM</option>
                      <option>02:00 PM</option>
                      <option>03:00 PM</option>
                      <option>04:00 PM</option>
                      <option>05:00 PM</option>
                      <option>06:00 PM</option>
                      <option>07:00 PM</option>
                      <option>08:00 PM</option>
                      <option>09:00 PM</option>
                      <option>10:00 PM</option>
                      <option>11:00 PM</option>
                      <option>12:00 PM</option>
                    </select>
                  </div>

                  <div className="col-lg-5 col-md-6">
                    <select
                      className="dashbaord-category-select"
                      onChange={(e) => setRealClosingTime(e.target.value)}
                    >
                      <option>Closing Time</option>
                      <option>Closed</option>
                      <option>01:00 AM</option>
                      <option>02:00 AM</option>
                      <option>03:00 AM</option>
                      <option>04:00 AM</option>
                      <option>05:00 AM</option>
                      <option>06:00 AM</option>
                      <option>07:00 AM</option>
                      <option>08:00 AM</option>
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 AM</option>
                      <option>01:00 PM</option>
                      <option>02:00 PM</option>
                      <option>03:00 PM</option>
                      <option>04:00 PM</option>
                      <option>05:00 PM</option>
                      <option>06:00 PM</option>
                      <option>07:00 PM</option>
                      <option>08:00 PM</option>
                      <option>09:00 PM</option>
                      <option>10:00 PM</option>
                      <option>11:00 PM</option>
                      <option>12:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="add-listings-box padding-field">
                <h3>Pricing</h3>

                <div className="form-group">
                  <label>
                    <i className="bx bx-purchase-tag"></i> Pricing:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="$542.00"
                    name="pricing"
                    value={updateListings.pricing || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="add-listings-btn mb-0">
                <button type="submit" className={disable && "isDisabled"}>
                  Update Listings{" "}
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
              </div>

              <div className="flex-grow-1"></div>
            </form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateListing;
