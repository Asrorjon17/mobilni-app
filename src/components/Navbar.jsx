import React, { useState } from "react";

import {
	TextField,
	Box,
	Backdrop,
	Stack,
	TextareaAutosize,
	Button,
	Typography,
	Fade,
} from "@mui/material";
import Modal from "@mui/material/Modal";

import { Navbar, Container, Nav } from "react-bootstrap";

import "../App.css";
import { BsFillChatDotsFill } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 480,
	bgcolor: "background.paper",
	// border: "2px solid #000",
	boxShadow: 24,
	// p: 4,
};

function NavBar() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	// let navigate = useNavigate();

	return (
		<div>
			<Navbar id="navbar">
				<Container>
					<Navbar.Brand href="#part1" color="dark" className="brand">
						Start Bootstrap
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto "></Nav>
						<Nav className="nava">
							<Nav.Link href="#part3" className="linktext">
								Features
							</Nav.Link>
							<Nav.Link href="#part4" className="linktext">
								Dowlaond
							</Nav.Link>
							<Button
								variant="contained"
								color="primary"
								size="small"
								style={{ bgcolor: "#2937F0" }}
								className="rounded-pill"
								id="btn"
								border="50"
								onClick={handleOpen}
							>
								<BsFillChatDotsFill className="icon" />
								Send Feedback
							</Button>
							<Modal
								aria-labelledby="transition-modal-title"
								aria-describedby="transition-modal-description"
								open={open}
								onClose={handleClose}
								closeAfterTransition
								BackdropComponent={Backdrop}
								BackdropProps={{
									timeout: 500,
								}}
							>
								<Fade in={open}>
									<Box sx={style}>
										<Typography
											style={{
												background: "blue",
												height: "10vh",
												color: "#fff",
												paddingLeft: "2vw",
												paddingTop: "3vh",
											}}
											id="modal-modal-title"
											variant="h6"
											component="h2"
										>
											Send feedback
										</Typography>
										<Stack spacing={2} style={{ padding: 20 }}>
											<TextField
												id="outlined-basic"
												label="
								            Full name
								                  "
												variant="outlined"
											/>
											<TextField
												id="outlined-basic"
												label="Email address"
												variant="outlined"
											/>
											<TextField
												id="outlined-basic"
												label="Phone number"
												variant="outlined"
											/>
											<TextareaAutosize
												aria-label="empty textarea"
												placeholder="Message"
												style={{ width: "100%", height: 170 }}
											/>
											<Button
												variant="primary"
												className="rounded-pill"
												id="btn"
												border="50"
												style={{
													background: "blue",
													color: "#fff",
													padding: 10,
												}}
											>
												Sambit
											</Button>
										</Stack>
									</Box>
								</Fade>
							</Modal>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;
