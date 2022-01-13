import React from "react";
import google_play from "./assets/img/google-play-badge.svg";
import app_store from "./assets/img/app-store-badge.svg";
import p_black from "./assets/img/portrait_black.png";
import vidio from "./assets/img/demo-screen.mp4";
const Part1 = () => {
	return (
		<div style={{ backgroundColor: "#F8F9FA" }} id="#part1">
			<div className="container part1">
				<div className="lefta">
					<h1>
						Showcase your <br /> app beautifully.
					</h1>
					<p>
						Launch your mobile app landing page faster with this free, <br />{" "}
						open source theme from Start Bootstrap!
					</p>

					<div className="btns">
						<div className="google_play ">
							<img src={google_play} alt="" />
						</div>

						<div>
							<img src={app_store} alt="" className="app_store" />
						</div>
					</div>
				</div>

				<div className="right">
					<div>
						<div className="round"></div>
						<video src={vidio} id="vidio1" autoPlay muted />
						<img src={p_black} alt="" className="p_blacka "></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Part1;
