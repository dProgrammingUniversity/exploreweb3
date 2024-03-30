import { useState, useEffect } from "react";
import { parseCookies } from "nookies";
import { toast } from "react-hot-toast";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import catchErrors from "../../../utils/catchErrors";
import baseUrl from "../../../utils/baseUrl";

const INITIAL_USER = {
	avatar: "",
	name: "",
	email: "",
	phoneNumber: "",
	website: "",
	address: "",
	bio: "",
	fbUrl: "",
	twtUrl: "",
	linkUrl: "",
	insUrl: "",
};

const ProfileArea = ({ user, avatar }) => {
	const { token } = parseCookies();
	const [updateUser, setupdateUser] = useState(INITIAL_USER);
	const [mediaPreview, setMediaPreview] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setupdateUser({
			avatar: user.avatar && user.avatar,
			name: user.name,
			email: user.email,
			phoneNumber: user.phoneNumber,
			bio: user.bio,
			website: user.website,
			address: user.address,
			fbUrl: user.fbUrl,
			twtUrl: user.twtUrl,
			linkUrl: user.linkUrl,
			insUrl: user.insUrl,
		});
	}, []);

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		if (name === "media") {
			let fileSize = files[0].size / 1024 / 1024;
			if (fileSize > 2) {
				e.target.value = null;
				return;
			}
			setupdateUser((prevState) => ({ ...prevState, avatar: files[0] }));
			setMediaPreview(window.URL.createObjectURL(files[0]));
		} else {
			setupdateUser((prevState) => ({ ...prevState, [name]: value }));
		}
	};

	const handleImageUpload = async () => {
		const data = new FormData();
		data.append("file", updateUser.avatar);
		data.append("upload_preset", process.env.UPLOAD_PRESET);
		data.append("cloud_name", process.env.CLOUD_NAME);

		const response = await axios.post(process.env.CLOUDINARY_URL, data);

		const mediaUrl = response.data.url;
		return mediaUrl;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			setError("");
			let mediaUrl = "";
			if (updateUser.avatar) {
				const imageUrl = await handleImageUpload();
				mediaUrl = imageUrl.replace(/^http:\/\//i, "https://");
			}
			const url = `${baseUrl}/api/v1/auth/account`;

			const {
				avatar,
				name,
				email,
				phoneNumber,
				website,
				address,
				bio,
				fbUrl,
				twtUrl,
				linkUrl,
				insUrl,
			} = updateUser;

			const payload = {
				avatar: mediaUrl ? mediaUrl : avatar,
				name,
				email,
				phoneNumber,
				website,
				address,
				bio,
				fbUrl,
				twtUrl,
				linkUrl,
				insUrl,
			};

			await axios.put(url, payload, {
				headers: { Authorization: token },
			});
			setLoading(false);
			setupdateUser(INITIAL_USER);
			toast.success("User updated successfully");
		} catch (error) {
			catchErrors(error, setError);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="row">
				<div className="col-lg-6 col-md-12">
					<div className="my-profile-box">
						<h3>Profile Details</h3>

						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<div className="form-group profile-box">
										{updateUser.avatar ? (
											<img
												src={
													mediaPreview
														? mediaPreview
														: updateUser.avatar
												}
												alt="image"
											/>
										) : (
											<img
												src="/images/avatar.png"
												alt="avatar"
											/>
										)}

										<div className="file-upload">
											<input
												type="file"
												name="media"
												id="file"
												className="inputfile"
												onChange={handleChange}
											/>
											<label htmlFor="file">
												<i className="bx bx-upload"></i>{" "}
												Upload Photo
											</label>
										</div>
									</div>
								</div>

								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<label>Your Name</label>
										<input
											type="text"
											className="form-control"
											name="name"
											value={updateUser.name || ""}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="col-xl-6 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Email</label>
										<input
											type="email"
											className="form-control"
											name="email"
											value={updateUser.email || ""}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="col-xl-6 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Phone</label>
										<input
											type="text"
											className="form-control"
											name="phoneNumber"
											value={updateUser.phoneNumber || ""}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="col-xl-6 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Address</label>
										<input
											type="text"
											className="form-control"
											name="address"
											value={updateUser.address || ""}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="col-xl-6 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Website</label>
										<input
											type="text"
											className="form-control"
											name="website"
											value={updateUser.website || ""}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<label>Bio</label>
										<textarea
											cols="30"
											rows="6"
											placeholder="Short description about you..."
											className="form-control"
											name="bio"
											value={updateUser.bio || ""}
											onChange={handleChange}
										></textarea>
									</div>
								</div>

								<div className="col-xl-6 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Facebook URL</label>
										<input
											type="text"
											className="form-control"
											placeholder="https://www.facebook.com/"
											name="fbUrl"
											value={updateUser.fbUrl || ""}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="col-xl-6 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Twitter URL</label>
										<input
											type="text"
											className="form-control"
											placeholder="https://twitter.com/"
											name="twtUrl"
											value={updateUser.twtUrl || ""}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="col-xl-6 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Linkedin URL</label>
										<input
											type="text"
											className="form-control"
											placeholder="https://www.linkedin.com/"
											name="linkUrl"
											value={updateUser.linkUrl || ""}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="col-xl-6 col-lg-12 col-md-12">
									<div className="form-group">
										<label>Instagram URL</label>
										<input
											type="text"
											className="form-control"
											placeholder="https://instagram.com/"
											name="insUrl"
											value={updateUser.insUrl || ""}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<button type="submit">
											Save Change{" "}
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
								</div>
							</div>
						</form>
					</div>
				</div>

				<div className="col-lg-6 col-md-12">
					<div className="my-profile-box">
						<h3>Change Password</h3>

						<form>
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<label>Current Password</label>
										<input
											type="password"
											className="form-control"
										/>
									</div>
								</div>

								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<label>New Password</label>
										<input
											type="password"
											className="form-control"
										/>
									</div>
								</div>

								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<label>Confirm New Password</label>
										<input
											type="password"
											className="form-control"
										/>
									</div>
								</div>

								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<button type="submit">
											Change Password
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileArea;
