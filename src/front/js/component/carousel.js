import React from "react";
import { Link } from "react-router-dom";

export const Carousel = () => {
	return (
		<div id="carouselExampleControls" className="carousel slide ml-50" data-ride="carousel">
			<div className="carousel-inner ">
				<div className="carousel-item active ">
					<img
						src="https://www.facebook.com/HotelVillaGrace/photos/a.394859867272918/3472816559477218/"
						className="center "
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://scontent.fsjo14-1.fna.fbcdn.net/v/t1.6435-9/124647425_3473283856097155_9142953360874236686_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=9267fe&_nc_ohc=LzL7JUFTgpcAX86JnKC&_nc_ht=scontent.fsjo14-1.fna&oh=3f0d3aee0e2a25df2f09d392810d9bca&oe=60BA69DD"
						className="center "
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://scontent.fsjo14-1.fna.fbcdn.net/v/t1.18169-9/17523022_1309432969148932_8233011830428826752_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=9267fe&_nc_ohc=Z32-TPHt9NcAX-0KRBd&_nc_ht=scontent.fsjo14-1.fna&oh=ab5776be0b9a38e0d152c03582a0b97e&oe=60B9BC06"
						className="center "
						alt="..."
					/>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};
