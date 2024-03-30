import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Banner = () => {
	// search
	const router = useRouter();
	const [title, setTitle] = useState("");
	const [location, setLocation] = useState("");
	const [category, setCategory] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		if (title || location || category) {
			router.replace(
				`/listings/?title=${title}&location=${location}&category=${category}`
			);
		} else {
			router.push("/");
		}
	};
	return (
		<>
			<section className="banner-area">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="banner-content">
								<h1 className="banner-two-heading">
									<Swiper
										autoplay={{
											delay: 5000,
											pauseOnMouseEnter: true,
										}}
										modules={[Autoplay]}
									>
										<SwiperSlide>
											Find Nearby <span className="color-0ec6c6">Hotels</span>
										</SwiperSlide>

										<SwiperSlide>
											Find Nearby <span className="color-0ec6c6">Restaurants</span>
										</SwiperSlide>

										<SwiperSlide>
											Find Nearby <span className="color-0ec6c6">Beauty</span>
										</SwiperSlide>

										<SwiperSlide>
											Find Nearby <span className="color-0ec6c6">Fitness</span>
										</SwiperSlide>
										
										<SwiperSlide>
											Find Nearby <span className="color-0ec6c6">Shopping</span>
										</SwiperSlide>
									</Swiper>
								</h1>

								<p>
									Expolore top-rated attractions, activities
									and more...
								</p>

								<form onSubmit={submitHandler}>
									<div className="row m-0 align-items-center">
										<div className="col-lg-4 col-md-12 p-0">
											<div className="form-group">
												<label>
													<i className="flaticon-search"></i>
												</label>
												<input
													type="text"
													className="form-control"
													placeholder="What are you looking for?"
													name="title"
													onChange={(e) =>
														setTitle(e.target.value)
													}
													required
												/>
											</div>
										</div>

										<div className="col-lg-3 col-md-6 p-0">
											<div className="form-group">
												<label>
													<i className="flaticon-pin"></i>
												</label>
												<input
													type="text"
													className="form-control"
													placeholder="Location"
													name="location"
													onChange={(e) =>
														setLocation(
															e.target.value
														)
													}
												/>
											</div>
										</div>

										<div className="col-lg-3 col-md-6 p-0">
											<div className="form-group category-select">
												<label className="category-icon">
													<i className="flaticon-category"></i>
												</label>
												<select
													className="banner-form-select-two"
													onChange={(e) =>
														setCategory(
															e.target.value
														)
													}
												>
													<option>
														All Categories
													</option>
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

										<div className="col-lg-2 col-md-12 p-0">
											<div className="submit-btn">
												<button type="submit">
													Search Now
												</button>
											</div>
										</div>
									</div>
								</form>

								<ul className="popular-search-list">
									<li>Popular:</li>
									<li>
										<Link href="/listings/?title=&location=&category=Restaurants">
											Restaurants
										</Link>
									</li>
									<li>
										<Link href="/listings/?title=&location=&category=Events">
											Events
										</Link>
									</li>
									<li>
										<Link href="/listings/?title=&location=&category=Clothing">
											Clothing
										</Link>
									</li>
									<li>
										<Link href="/listings/?title=&location=&category=Bank">
											Bank
										</Link>
									</li>
									<li>
										<Link href="/listings/?title=&location=&category=Fitness">
											Fitness
										</Link>
									</li>
									<li>
										<Link href="/listings/?title=&location=&category=Bookstore">
											Bookstore
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-4 col-md-12">
							<div className="banner-image">
								<img
									src="/images/banner-img1.png"
									alt="image"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
