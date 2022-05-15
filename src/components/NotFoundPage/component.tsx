import React from "react";
import { Link } from "react-router-dom";
import { Error } from "../Styled/component";

const NotFoundPage = () => {
	return (
		<div>
			<Error>Page not Found</Error>
			<Error style={{ top: "50%" }}>
				<Link style={{ color: "#f5f5f5", fontSize: "1.5rem" }} to="/planet">
					Go Home
				</Link>
			</Error>
		</div>
	);
};

export default NotFoundPage;
