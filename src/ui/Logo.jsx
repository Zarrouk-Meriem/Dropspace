import { BsFillDropletFill } from "react-icons/bs";
import { Link } from "react-router";

function Logo() {
	return (
		<Link to={"/home"} className='logoContainer'>
			<BsFillDropletFill className='logo' />
			<h2>Dropspace</h2>
		</Link>
	);
}

export default Logo;
