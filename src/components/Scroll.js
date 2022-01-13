// import * as React from "react";
// import Backdrop from "@mui/material/Backdrop";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
// import { TextField, Stack, TextareaAutosize, Typography } from "@mui/material";

// const style = {
// 	position: "absolute",
// 	top: "50%",
// 	left: "50%",
// 	transform: "translate(-50%, -50%)",
// 	width: 480,
// 	bgcolor: "background.paper",
// 	// border: "2px solid #000",
// 	boxShadow: 24,
// 	// p: 4,
// };

// export default function TransitionsModal() {
// 	const [open, setOpen] = React.useState(false);
// 	const handleOpen = () => setOpen(true);
// 	const handleClose = () => setOpen(false);

// 	return (
// 		<div>
// 			<Button onClick={handleOpen}>Open modal</Button>
// 			<Modal
// 				aria-labelledby="transition-modal-title"
// 				aria-describedby="transition-modal-description"
// 				open={open}
// 				onClose={handleClose}
// 				closeAfterTransition
// 				BackdropComponent={Backdrop}
// 				BackdropProps={{
// 					timeout: 500,
// 				}}
// 			>
// 				<Fade in={open}>
// 					<Box sx={style}>
// 						<Typography
// 							style={{
// 								background: "blue",
// 								height: "10vh",
// 								color: "#fff",
// 								paddingLeft: "2vw",
// 								paddingTop: "3vh",
// 							}}
// 							id="modal-modal-title"
// 							variant="h6"
// 							component="h2"
// 						>
// 							Send feedback
// 						</Typography>
// 						<Stack spacing={2} style={{ padding: 20 }}>
// 							<TextField
// 								id="outlined-basic"
// 								label="
// 								Full name
// 								"
// 								variant="outlined"
// 							/>
// 							<TextField
// 								id="outlined-basic"
// 								label="Email address"
// 								variant="outlined"
// 							/>
// 							<TextField
// 								id="outlined-basic"
// 								label="Phone number"
// 								variant="outlined"
// 							/>
// 							<TextareaAutosize
// 								aria-label="empty textarea"
// 								placeholder="Message"
// 								style={{ width: "100%", height: 170 }}
// 							/>
// 							<Button
// 								variant="primary"
// 								className="rounded-pill"
// 								id="btn"
// 								border="50"
// 								style={{ background: "blue", color: "#fff", padding: 10 }}
// 							>
// 								Sambit
// 							</Button>
// 						</Stack>
// 					</Box>
// 				</Fade>
// 			</Modal>
// 		</div>
// 	);
// }
import React from "react";

const Scroll = () => {
	return <div>aaaa</div>;
};

export default Scroll;
