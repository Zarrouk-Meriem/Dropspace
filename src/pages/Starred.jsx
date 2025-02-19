import { CiStar } from "react-icons/ci";
import Heading from "../ui/Heading";
import SortBy from "../ui/SortBy";
import FileTable from "../features/files/FileTable";

function Starred() {
	return (
		<>
			<div className='pageHeader'>
				<Heading
					icon={
						<CiStar
							className='nav-icon'
							style={{
								height: "4rem",
								width: "4rem",
								color: "white",
							}}
						/>
					}
					iconColor={"var(--color-yellow-500)"}
				>
					Starred
				</Heading>
				<SortBy
					options={[
						{ value: "date-desc", label: "Sort by date (recent first)" },
						{ value: "date-asc", label: "Sort by date (earlier first)" },
						{
							value: "size-desc",
							label: "Sort by size (high first)",
						},
						{ value: "size-asc", label: "Sort by size (low first)" },
					]}
				/>
			</div>
			<FileTable filter='starred' deleteIcon={true} />
		</>
	);
}

export default Starred;
