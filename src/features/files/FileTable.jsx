import FileRow from "./FileRow";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import { useFiles } from "./useFiles";
import Empty from "../../ui/Empty";
import { useEffect, useState } from "react";

function FileTable({ filter, deleteIcon, archiveIcon, starIcon, recent }) {
	const [starredFiles, setStarredFiles] = useState([]);
	const [archivedFiles, setArchivedFiles] = useState([]);

	const { files, isLoading } = useFiles();

	useEffect(() => {
		if (files && !isLoading) {
			const starredFiles = files?.filter((file) => file.isStarred === true);
			setStarredFiles(starredFiles);
			const archivedFiles = files?.filter((file) => file.isArchived === true);
			setArchivedFiles(archivedFiles);
		}
	}, [files, isLoading]);

	if (isLoading) return <Spinner />;

	if (!files) return <Empty tableOf={"files"} singleWord={"file"} />;

	let data = files;

	if (filter === "starred") data = starredFiles;
	if (filter === "archived") data = archivedFiles;
	return (
		<Table columns={!recent ? "2fr 1fr 1fr 1fr" : "2fr 1fr 1fr"}>
			<Table.Header>
				<div>Name</div>
				<div>Date Archived</div>
				<div>Size</div>
				<div></div>
			</Table.Header>

			<Table.Body
				data={data}
				render={(file, i) => {
					if (recent) {
						if (i < 5) {
							return (
								<FileRow
									isStarred={file.isStarred}
									isArchived={file.isArchived}
									deleteIcon={deleteIcon}
									archiveIcon={archiveIcon}
									starIcon={starIcon}
									key={file.id}
									file={file}
									op={false}
								/>
							);
						}
					} else
						return (
							<FileRow
								isStarred={file.isStarred}
								isArchived={file.isArchived}
								deleteIcon={deleteIcon}
								archiveIcon={archiveIcon}
								starIcon={starIcon}
								key={file.id}
								file={file}
								op={true}
							/>
						);
				}}
			/>
		</Table>
	);
}

export default FileTable;
