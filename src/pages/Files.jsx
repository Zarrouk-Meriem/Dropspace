import { LuFiles } from "react-icons/lu";
import Heading from "../ui/Heading";
import SortBy from "../ui/SortBy";
import FileTable from "../features/files/FileTable";

function Files() {
	return (
		<>
			<div className='pageHeader'>
				<Heading
					icon={
						<LuFiles
							style={{
								height: "4rem",
								width: "4rem",
								color: "white",
							}}
						/>
					}
					iconColor={"var(--color-brand-600)"}
				>
					All Files
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
			<FileTable
				deleteIcon={false}
				starIcon={true}
				archiveIcon={true}
			></FileTable>
		</>
	);
}

export default Files;
