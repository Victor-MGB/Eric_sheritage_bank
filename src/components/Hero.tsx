import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const slides = [
		{
			image: "https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/banner-1.jpg",
			patterns: [
				"https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/shape-1.png",
				"https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/shape-2.png",
			],
			heading: "Open our <span>Current</span> <br> Account Online",
			text: "This statistic is based on our average personal current account online <br> opening time from the last 12 months.",
			link: "https://23july.hostlin.com/metrobank/contact/",
		},
		{
			image: "https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/banner-2.jpg",
			patterns: [
				"https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/shape-1.png",
				"https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/shape-2.png",
			],
			heading: "Open our <span>Current</span> <br> Account Online",
			text: "This statistic is based on our average personal current account online <br> opening time from the last 12 months.",
			link: "https://23july.hostlin.com/metrobank/contact/",
		},
		{
			image: "https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/banner-3.jpg",
			patterns: [
				"https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/shape-1.png",
				"https://23july.hostlin.com/metrobank/wp-content/uploads/2023/10/shape-2.png",
			],
			heading: "Open our <span>Current</span> <br> Account Online",
			text: "This statistic is based on our average personal current account online <br> opening time from the last 12 months.",
			link: "https://23july.hostlin.com/metrobank/contact/",
		},
	];

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
		}, 5000); 
		return () => clearInterval(interval);
	}, [slides.length]);

	return (
		<section className='banner-section'>
			<div className='swiper-wrapper'>
				{slides.map((item, index) => (
					<div
						key={index}
						className={`swiper-slide ${index === currentIndex ? "swiper-slide-active banner-section " : ""}`}
						style={{
							display: index === currentIndex ? "block" : "none",
							backgroundImage: `url(${item.image})`,
						}}
					>
						<div className='pattern-layer'>
							{item.patterns.map((pattern, patternIndex) => (
								<div
									key={patternIndex}
									className={`pattern-${patternIndex + 1} pattern-1`}
									style={{ backgroundImage: `url(${pattern})` }}
								></div>
							))}
						</div>

						<div className='content-outer'>
							<div className='content-box'>
								<div className='inner'>
									<h1 dangerouslySetInnerHTML={{ __html: item.heading }}></h1>
									<div
										className='text'
										dangerouslySetInnerHTML={{ __html: item.text }}
									></div>
									<div className='link-box'>
										<a href={item.link} className='btn-1 btn-large'>
											Make an Appointment <span></span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='banner-slider-nav'>
				<div
					className='banner-slider-control banner-slider-button-prev justify-center flex items-center'
					onClick={handlePrev}
				>
					<FaArrowLeft />
				</div>
				<div
					className=' banner-slider-control banner-slider-button-next justify-center flex items-center '
					onClick={handleNext}
				>
					<FaArrowRight />
				</div>
			</div>
		</section>
	);
};

export default Banner;
