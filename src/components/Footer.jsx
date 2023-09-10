import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<br />
			Special thanks to{" "}
			<Link
				to="https://sweetalert2.github.io/"
				target="_blank"
				id="sweetAlert"
				rel="noreferrer"
			>
				SweetAlert2{" "}
			</Link>
			and{" "}
			<Link
				to="https://www.untitledui.com/"
				target="_blank"
				id="Untitled-UI"
				rel="noreferrer"
			>
				Untitled UI
			</Link>
		</footer>
	);
};

export default Footer;
