import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Forbidden = () => {
	return (
		<div className="error-page">
			<div className="error-header">
				<i className="bi bi-emoji-frown"></i>
				<h1>403 Access Forbidden</h1>
			</div>
			<div className="back-to-home-from-error">
				<Button colorScheme="orange">
					<Link to="/">Back To Home</Link>
				</Button>
			</div>
		</div>
	);
};
export default Forbidden;