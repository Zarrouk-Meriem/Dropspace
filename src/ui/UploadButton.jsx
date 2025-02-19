import { RiUploadCloud2Fill } from "react-icons/ri";
import { useFiles } from "../features/files/useFiles";
import { format } from "date-fns";
import { useUploadFile } from "../features/files/useUpload";

function UploadButton() {
	const { files } = useFiles();
	const { uploadFile } = useUploadFile();

	const handleFileChange = (e) => {
		const data = e.target.files;

		if (data && data.length > 0) {
			const file = {
				id: files.length + 1 + "",
				dateCreated: format(new Date(data[0].lastModified), "MMMM dd, yyyy"),
				isArchived: false,
				isStarred: false,
				name: data[0].name,
				size: data[0].size,
				type: data[0].type.split("/")[0],
			};
			uploadFile(file);
		}
	};

	return (
		<label htmlFor='input' className='upload-btn'>
			<input
				type='file'
				id='input'
				multiple={false}
				hidden
				onChange={handleFileChange}
			/>
			<RiUploadCloud2Fill className='upload-icon' />
			Upload
		</label>
	);
}
export default UploadButton;
