import React, { useEffect, useState, useCallback, useContext } from "react";
import { parseCookies } from "nookies";
import { toast } from "react-hot-toast";
import { Spinner } from "react-bootstrap";
import { IndiceContext } from "../../../contexts";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useDropzone } from "react-dropzone";
import Link from "next/link";
import NavbarTwo from "../../../components/_App/NavbarTwo";
import DashboardNavbar from "../../../components/Dashboard/DashboardNavbar";
import controls from "../../../utils/RTEControl";
import dynamic from "next/dynamic";
import Footer from "../../../components/Dashboard/Footer";

const RichTextEditor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
});

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

const AddListing = ({ user }) => {
  // context state
  const { setPendingListing } = useContext(IndiceContext);

  const [files, setFiles] = useState([]);
  const { token } = parseCookies();
  const [createListings, setCreateListings] = useState(INITIAL_LISTINGS);
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [previewImage, setPreviewImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  // select form value
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCreateListings((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleImageUpload = async () => {
    const data = new FormData();
    data.append("file", createListings.gallery);
    data.append("upload_preset", process.env.UPLOAD_PRESET);
    data.append("cloud_name", process.env.CLOUD_NAME);
    const response = await axios.post(process.env.CLOUDINARY_URL, files);

    const mediaUrl = response.data.url;
    return mediaUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormError("");
      let mediaUrl = "";
      if (createListings.gallery) {
        const imageUrl = await handleImageUpload();
        mediaUrl = imageUrl.replace(/^http:\/\//i, "https://");
      }
      const url = `${baseUrl}/api/v1/listings`;

      const {
        listingTitle,
        keyword,
        address,
        state,
        zipcode,
        description,
        email,
        website,
        phone,
        facebook,
        twitter,
        linkedin,
        facilities,
        pricing,
      } = createListings;

      const payload = {
        listingTitle,
        category,
        keyword,
        city,
        address,
        state,
        zipcode,
        gallery: files,
        description,
        email,
        website,
        phone,
        facebook,
        twitter,
        linkedin,
        facilities,
        openingTime,
        closingTime,
        pricing,
      };

      const response = await axios.post(url, payload, {
        headers: { Authorization: token },
      });

      {
        user.role === "admin"
          ? setPendingListing(response.data.adminPendingListings)
          : setPendingListing(response.data.pendingListings);
      }

      setLoading(false);
      setCreateListings(INITIAL_LISTINGS);
      setFiles([]);
      toast.success(
        "Listing created successfully. Thank you for posting! Your post will not be visible until a admin has approved"
      );
    } catch (error) {
      toast.error("Please, fillup all required fields");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <DashboardNavbar />

      <div className="main-content d-flex flex-column">
        <NavbarTwo userRole={user} />

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
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label>
                    <i className="bx bx-briefcase-alt"></i> Listing Title:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name of your business"
                    name="listingTitle"
                    value={createListings.listingTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
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

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>
                    <i className="bx bxs-key"></i> Keywords:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Maximum 15 , should be separated by commas"
                    name="keyword"
                    value={createListings.keyword}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="add-listings-box">
            <h3>Location</h3>

            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>
                    <i className="bx bx-menu-alt-left"></i> Address:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. 55 County Laois"
                    name="address"
                    value={createListings.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>
                    <i className="bx bx-menu-alt-left"></i> City:
                  </label>
                  <select
                    className="dashbaord-category-select"
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option>Select City</option>
                    <option>New York</option>
                    <option>London</option>
                    <option>Paris</option>
                    <option>Moscow</option>
                    <option>Rome</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>
                    <i className="bx bx-menu-alt-left"></i> State:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    value={createListings.state}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <label>
                    <i className="bx bx-menu-alt-left"></i> Zip-Code:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="zipcode"
                    value={createListings.zipcode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div {...getRootProps()} className="dropzone add-listings-box">
            <h3>Gallery</h3>
            {files.length > 0 ? (
              <div className="gallery-flex">
                {thumbs}
                <input {...getInputProps()} />
              </div>
            ) : (
              <div className="file-upload-box global-pointer">
                <input {...getInputProps()} />
                <p>Click here to select files</p>
              </div>
            )}
          </div>
          <p className="form-text mar-top-minus-20 mb-4">
            <b>Noted:</b> Upload the image size 790x525
          </p>

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
                    value={createListings.description}
                    onChange={(e) =>
                      setCreateListings((prevState) => ({
                        ...prevState,
                        description: e,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label>
                    <i className="bx bx-envelope"></i> Email Address:{" "}
                    <span>(optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={createListings.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label>
                    <i className="bx bx-globe"></i> Website:{" "}
                    <span>(optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="website"
                    value={createListings.website}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="form-group">
                  <label>
                    <i className="bx bx-phone-call"></i> Phone:{" "}
                    <span>(optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={createListings.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
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
                    value={createListings.facebook}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
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
                    value={createListings.twitter}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
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
                    value={createListings.linkedin}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="add-listings-box padding-field">
            <h3>Opening Hours</h3>

            <div className="row opening-day align-items-center">
              <div className="col-lg-6 col-md-6">
                <select
                  className="dashbaord-category-select mb-3"
                  onChange={(e) => setOpeningTime(e.target.value)}
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

              <div className="col-lg-6 col-md-6">
                <select
                  className="dashbaord-category-select mb-3"
                  onChange={(e) => setClosingTime(e.target.value)}
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
                value={createListings.pricing}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="add-listings-btn">
            <button type="submit">
              Submit Listings{" "}
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
        </form>

        <Footer />
      </div>
    </>
  );
};

export default AddListing;
