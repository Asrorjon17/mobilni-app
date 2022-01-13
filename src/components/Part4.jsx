import React from "react";
import round_image from "./assets/img/round_image.jpg";

const Part4 = () => {
	return (
		<div id="part4">
			<div className="left_part">
				<h3>Enter a new age of web design</h3>
				<div className="p">
					<p>
						This section is perfect for featuring some information about your
						application, why it was built, the problem it solves, or anything
						else! There's plenty of space for text here, so don't worry about
						writing too much
					</p>
				</div>
			</div>

			<div className="right_part">
				<img src={round_image} alt="" className="round_image" />
			</div>
		</div>
	);
};

export default Part4;
