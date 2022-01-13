import React from "react";
import p_black from "./assets/img/portrait_black.png";
import { BsCamera, BsPatchCheck, BsPhone, BsGift } from "react-icons/bs";
import vidio from "./assets/img/demo-screen.mp4";

const Part3 = () => {
	return (
		<div className="part3" id="part3">
			<div className="p3_left">
				<div className="round2"></div>
				<video src={vidio} autoPlay muted id="vidio2" />

				<div className="p_black2">
					<img src={p_black} alt="" className="p_black " />
				</div>
			</div>

			<div className="cardboard">
				<div className="cards">
					<div className="card4">
						<div>
							<BsPhone className="icons" />
						</div>
						<h4>Device Mockups</h4>
						<p>Ready to use HTML/CSS device mockups, no Photoshop required!</p>
					</div>

					<div className="card4" id="cam">
						<div>
							<BsCamera className="icons" />
						</div>
						<h4>Flexible Use</h4>
						<p>
							Put an image, video, animation, or anything else in the screen!
						</p>
					</div>
				</div>

				<div className="cards">
					<div className="card4">
						<div>
							<BsGift className="icons" />
						</div>
						<h4>Free to Use</h4>
						<p>
							As always, this theme is free to download and use for any purpose!
						</p>
					</div>

					<div className="card4" id="open">
						<div>
							<BsPatchCheck className="icons" />
						</div>
						<h4>Open Source</h4>
						<p>
							Since this theme is MIT licensed, you can use it commercially!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Part3;
