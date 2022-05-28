import React from "react";
import { Link } from "react-router-dom";
import { Center } from "../Styled/component";

const NotFoundPage = () => {
	return (
		<div>
			<Center>Page not Found</Center>
			<Center style={{ top: "50%" }}>
				<Link style={{ color: "#f5f5f5", fontSize: "1.5rem" }} to="/">
					Go Home
				</Link>
			</Center>
		</div>
	);
};

export default NotFoundPage;
