import toast from "react-hot-toast";

export async function fetchFiles({ sortBy }) {
	try {
		const res = await fetch("http://localhost:3000/files");
		const files = await res.json();

		if (sortBy) {
			if (sortBy.field === "size" && sortBy.direction === "asc")
				return files.sort((a, b) => a[sortBy.field] - b[sortBy.field]);
			if (sortBy.field === "size" && sortBy.direction === "desc")
				return files.sort((a, b) => b[sortBy.field] - a[sortBy.field]);
			if (sortBy.field === "date" && sortBy.direction === "asc")
				return files.sort((a, b) => {
					return new Date(a.dateCreated) - new Date(b.dateCreated);
				});
			if (sortBy.field === "date" && sortBy.direction === "desc")
				return files.sort((a, b) => {
					return new Date(b.dateCreated) - new Date(a.dateCreated);
				});
		}

		return files;
	} catch (err) {
		console.error(err.message);
		throw new Error("files could not be loaded");
	}
}

export function formatFileSize(bytes) {
	const sizeUnits = ["B", "KB", "MB", "GB", "TB", "PB"];
	let unitIndex = 0;
	let size = bytes;

	while (size >= 1024 && unitIndex < sizeUnits.length - 1) {
		size /= 1024;
		unitIndex++;
	}

	return size.toFixed(2) + " " + sizeUnits[unitIndex];
}

export async function editFile(fileId, updatedFields) {
	try {
		const response = await fetch(`http://localhost:3000/files/${fileId}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedFields),
		});

		if (!response.ok) {
			throw new Error("Failed to edit the file");
		}

		const data = await response.json();

		return data;
	} catch (error) {
		toast.error(error.message); // Show error notification
		throw error; // Re-throw the error if further handling is needed
	}
}
export async function addFile(newFile) {
	try {
		const response = await fetch("http://localhost:3000/files", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newFile),
		});

		if (!response.ok) {
			throw new Error("Failed to add the file");
		}

		const data = await response.json();
		toast.success("File successfully added");
		return data;
	} catch (error) {
		toast.error(error.message);
		throw error;
	}
}
