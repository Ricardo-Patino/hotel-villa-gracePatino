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
						src="https://scontent.fsjo14-1.fna.fbcdn.net/v/t1.6435-9/125122515_3473031696122371_1842161321153616464_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=e3f864&_nc_ohc=x0VW2gnMdBsAX9Yv55z&_nc_ht=scontent.fsjo14-1.fna&oh=926b1636fa2232d4909f90682d9e3f46&oe=60B94D4E"
						className="center "
						alt="..."
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://scontent.fsjo14-1.fna.fbcdn.net/v/t1.6435-9/33075216_1722229967869228_6146354945131020288_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=NAVeZ4-oyzgAX-Ju5cO&_nc_ht=scontent.fsjo14-1.fna&oh=ac90c3ea57fcaa2e74e49fd1508f56b2&oe=60BA8848"
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
