import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFile } from "../../services/filesApi";
import toast from "react-hot-toast";

export function useUploadFile() {
	const queryClient = useQueryClient();

	const { mutate: uploadFile, isLoading: isAdding } = useMutation({
		mutationFn: (newFile) => addFile(newFile),
		onSuccess: () => {
			toast.success("File added successfully");
			queryClient.invalidateQueries(["files"]);
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	return { uploadFile, isAdding };
}
