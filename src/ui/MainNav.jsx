//ICONS
import { HiOutlineArchiveBox, HiOutlineHome } from "react-icons/hi2";

import { LuFiles } from "react-icons/lu";
import { CiStar } from "react-icons/ci";

import { NavLink } from "react-router";

function MainNav() {
	return (
		<ul className='navList'>
			<li>
				<NavLink className='navLink' to='/home'>
					<HiOutlineHome />
					Home
				</NavLink>
			</li>
			<li>
				<NavLink className='navLink' to='/files'>
					<LuFiles />
					All Files
				</NavLink>
			</li>

			<li>
				<NavLink className='navLink' to='/starred'>
					<CiStar className='nav-icon' />
					Starred
				</NavLink>
			</li>
			<li>
				<NavLink className='navLink' to='/archived'>
					<HiOutlineArchiveBox />
					Archived
				</NavLink>
			</li>
		</ul>
	);
}

export default MainNav;
