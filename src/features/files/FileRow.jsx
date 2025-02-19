import Table from "../../ui/Table";

import { CiStar } from "react-icons/ci";
import {
	FaRegFile,
	FaRegFileAudio,
	FaRegFileVideo,
	FaRegFileZipper,
} from "react-icons/fa6";
import { FaRegFileImage } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { formatFileSize } from "../../services/filesApi";
import { useDeleteFile } from "./useDelete";
import { useArchiveFile } from "./useArchive";
import { useStarFile } from "./useStar";
import { useQueryClient } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

function FileRow({
	op,
	deleteIcon,
	starIcon,
	archiveIcon,
	file,
	isStarred,
	isArchived,
}) {
	const { id, dateCreated, size, name } = file;

	let fileIcon = <FaRegFile className='txt-icon fileIcon' />;
	const ext = name.split(".")[1];

	if (ext === "txt") fileIcon = <FaRegFile className='txt-icon fileIcon' />;
	if (ext === "png" || ext === "eps" || ext === "jpg" || ext === "jpeg")
		fileIcon = <FaRegFileImage className='img-icon fileIcon ' />;
	if (ext === "mp4" || ext === "avi")
		fileIcon = <FaRegFileVideo className='video-icon fileIcon' />;
	if (ext === "mp3" || ext === "wav")
		fileIcon = <FaRegFileAudio className='audio-icon fileIcon' />;
	if (ext === "zip")
		fileIcon = <FaRegFileZipper className='zip-icon fileIcon' />;

	const afterArchived = {
		width: "7px",
		height: "7px",
		backgroundColor: "var(--color-pink-500)",
		borderRadius: "50%",
		position: "absolute",
		bottom: "30px",
		left: " 0px",
	};
	const afterStarred = {
		width: "7px",
		height: "7px",
		backgroundColor: "var(--color-yellow-600)",
		borderRadius: "50%",
		position: "absolute",
		bottom: "30px",
		left: " 5px",
	};
	const { deleteFile } = useDeleteFile();
	const { archiveFile } = useArchiveFile();
	const { starFile } = useStarFile();
	const QueryClient = useQueryClient();

	return (
		<Table.Row>
			<Toaster position='top-center' reverseOrder={false} />
			<div className='file'>
				<span>
					{fileIcon}

					<span style={isArchived ? afterArchived : { display: "none" }} />
					<span style={isStarred ? afterStarred : { display: "none" }} />
				</span>

				<p className='fileName'>{name}</p>
			</div>

			<div className='stacked'>
				<span>{dateCreated}</span>
			</div>

			<div className='stacked'>
				<span>{formatFileSize(size)} </span>
			</div>

			{op && (
				<div className='table-operations'>
					{starIcon && (
						<button
							onClick={() => {
								starFile(id, { isStarred: true });
								QueryClient.invalidateQueries(["files"]);
							}}
							className='btn'
							style={{ backgroundColor: "var(--color-yellow-500)" }}
						>
							<CiStar
								className='op-icon'
								style={{
									strokeWidth: "1px",
									height: "2.2rem",
									width: "2.2rem",
								}}
							/>
						</button>
					)}
					{archiveIcon && (
						<button
							onClick={() => {
								archiveFile(id, { isArchived: true });
								QueryClient.invalidateQueries(["files"]);
							}}
							className='btn'
							style={{ backgroundColor: "var(--color-pink-500)" }}
						>
							<HiOutlineArchiveBox
								className='op-icon'
								style={{ height: "2.2rem", width: "2.2rem" }}
							/>
						</button>
					)}
					{deleteIcon && (
						<button
							id={id}
							onClick={() => {
								deleteFile(id);
								QueryClient.invalidateQueries(["files"]);
							}}
							className='btn'
							style={{ backgroundColor: "var(--color-red-800)" }}
						>
							<FiTrash
								className='op-icon'
								style={{ height: "2.2rem", width: "2.2rem" }}
							/>
						</button>
					)}
				</div>
			)}
		</Table.Row>
	);
}

export default FileRow;
