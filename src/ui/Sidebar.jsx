import Logo from "./Logo";
import MainNav from "./MainNav";
import UploadButton from "./UploadButton";

function Sidebar() {
	return (
		<div className='sidebar'>
			<Logo />
			<UploadButton />
			<MainNav />
		</div>
	);
}

export default Sidebar;
