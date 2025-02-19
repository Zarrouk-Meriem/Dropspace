import { HiOutlineArchiveBox } from "react-icons/hi2";
import Heading from "../ui/Heading";
import SortBy from "../ui/SortBy";
import FileTable from "../features/files/FileTable";

function Archived() {
	return (
		<>
			<div className='pageHeader'>
				<Heading
					icon={
						<HiOutlineArchiveBox
							style={{
								strokeWidth: "2px",
								height: "4rem",
								width: "4rem",
								color: "white",
							}}
						/>
					}
					iconColor={"var(--color-pink-500)"}
				>
					Archived
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
			<FileTable filter='archived' deleteIcon={true} />
		</>
	);
}

export default Archived;
